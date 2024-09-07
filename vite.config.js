import { resolve } from "path"
import react from "@vitejs/plugin-react"

/** @type {import('vite').UserConfig} */
export default {
	plugins: [react()],
	server: {
		port: 3000,
	},
}
