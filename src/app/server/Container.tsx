import type { ReactNode } from "react"

export const Container = ({
	title,
	children,
	color = "red",
}: { title: string; children: ReactNode; color?: string }) => {
	return (
		<div
			style={{
				padding: "16px",
				paddingTop: "8px",
				border: `1px dashed ${color}`,
			}}
		>
			<h2>{title}</h2>
			{children}
		</div>
	)
}
