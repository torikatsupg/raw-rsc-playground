// @ts-expect-error
import rsdws from "react-server-dom-webpack/server"
import { App } from "./App"

console.log('index.tsx')

const { renderToPipeableStream } = rsdws

const bundlerConfig = {
	"src/Clock.tsx": {
		Clock: {
			// for webpack
			id: "Clock.tsx",
			name: "Clock",
			chunks: ["pika", "chu"],
		},
	},
}

renderToPipeableStream(<App />, bundlerConfig).pipe(process.stdout)
