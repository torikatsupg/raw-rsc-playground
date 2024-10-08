import { spawn } from "child_process"
import http from "http"
import { PassThrough, Readable } from "stream"
import { fileURLToPath } from "url"
import type {} from "react/canary"
import type { ReadableStream } from "stream/web"
import { createServer } from "vite"

import ReactDOM from "react-dom/server"
// @ts-expect-error
import rsdwc from "react-server-dom-webpack/client"
const { createFromReadableStream } = rsdwc

import { use } from "react"
import { allClientComponents } from "./app/client/clientComponents.js"
import { LinesStream, MergedStream, RscScriptStream } from "./shared/stream.js"

const render = () => {
	const rscFile = fileURLToPath(new URL("./rsc.js", import.meta.url).toString())
	const proc = spawn("node", ["--conditions", "react-server", rscFile], {
		stdio: ["ignore", "pipe", "inherit"],
	})
	return proc.stdout
}

// @ts-expect-error
globalThis.__webpack_require__ = async () => {
	return allClientComponents
}

const renderHTML = async (): Promise<ReadableStream> => {
	const [stream1, stream2] = Readable.toWeb(render()).tee()

	const chunk = createFromReadableStream(stream1)

	const PageContainer: React.FC = () => {
		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
				</head>
				<body>
					<div id="app">{use(chunk)}</div>
				</body>
			</html>
		)
	}

	return new Promise((resolve) => {
		const reactStream = ReactDOM.renderToPipeableStream(<PageContainer />, {
			bootstrapScriptContent: `
globalThis.rscData = [];
`,
			bootstrapModules: ["src/client.tsx"],
			onShellReady() {
				const rscStream = stream2
					.pipeThrough(new LinesStream())
					.pipeThrough(new RscScriptStream())

				const htmlStream = new MergedStream(
					[Readable.toWeb(reactStream.pipe(new PassThrough())), rscStream],
					0,
				)
				resolve(htmlStream)
			},
		})
	})
}

const vite = await createServer()

const server = http.createServer((req, res) => {
	vite.middlewares(req, res, () => {
		renderHTML()
			.then((html) => {
				res.writeHead(200, { "Content-Type": "text/html" })
				Readable.fromWeb(html).pipe(res)
			})
			.catch((error) => {
				console.error(error)
				res.writeHead(500, { "Content-Type": "text/plain" })
				res.end(String(error))
			})
	})
})
server.listen(3000, () => {
	console.log("Listening on http://localhost:3000")
})
