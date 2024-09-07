// @ts-expect-error
import { createFromReadableStream } from "react-server-dom-webpack/client"

import { use } from "react"
import { createRoot } from "react-dom/client"
import { Clock } from "./app/client/Clock"

const app = document.getElementById("app")
const ssrData = document.getElementById("rsc-data")?.getAttribute("data-data")

if (app == null || ssrData == null) {
	throw new Error("Element not found")
}

const { readable: ssrDataStream, writable } = new TransformStream<
	Uint8Array,
	Uint8Array
>()
;(async () => {
	const encoder = new TextEncoder()
	const writer = writable.getWriter()
	await writer.write(encoder.encode(ssrData))
	await writer.close()
})()

const allClientComponents = {
	Clock,
} satisfies { [K in keyof ClientComponents]: React.FC<ClientComponents[K]> }

// TODO: to learn `WHATWG Stream`
const chunk = createFromReadableStream(ssrDataStream)

// @ts-expect-error
globalThis.__webpack_require__ = async () => {
	return allClientComponents
}

const Container: React.FC = () => {
	return use(chunk)
}

createRoot(app).render(<Container />)
