import type { ReactNode } from "react"

export const Page = ({
	title,
	children,
}: { title: string; children: ReactNode }) => {
	return (
		<div>
			<h1>{title}</h1>
			{children}
		</div>
	)
}
