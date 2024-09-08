// @ts-expect-error
import { createFromReadableStream } from "react-server-dom-webpack/client"

import { use } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import { allClientComponents } from "./app/client/clientComponents.js"

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

// TODO: to learn `WHATWG Stream`
const chunk = createFromReadableStream(ssrDataStream)

// @ts-expect-error
globalThis.__webpack_require__ = async () => {
	return allClientComponents
}
const Container: React.FC = () => {
	return use(chunk)
}

hydrateRoot(app, <Container />)
