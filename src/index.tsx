// @ts-expect-error
import rsdws from "react-server-dom-webpack/server"
import { App } from "./App"

const { renderToPipeableStream } = rsdws

const bundlerConfig = {
	"src/Clock.tsx": {
		Clock: {
			pika: "chu",
		},
	},
}

renderToPipeableStream(<App />, bundlerConfig).pipe(process.stdout)
