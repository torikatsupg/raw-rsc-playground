import type { ReactNode } from "react"

export const Page = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<h1>React Server Components example</h1>
			{children}
		</div>
	)
}
