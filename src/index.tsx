// @ts-expect-error
import rsdws from "react-server-dom-webpack/server"
import { App } from "./app"

const { renderToPipeableStream } = rsdws

renderToPipeableStream(<App />).pipe(process.stdout)
