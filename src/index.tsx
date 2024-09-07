// @ts-expect-error
import rsdws from "react-server-dom-webpack/server"
import { App } from "./app/server/App"
import { bundleConfig as bundlerConfig } from "./app/server/Client"

console.log("index.tsx")

const { renderToPipeableStream } = rsdws

renderToPipeableStream(<App />, bundlerConfig).pipe(process.stdout)
