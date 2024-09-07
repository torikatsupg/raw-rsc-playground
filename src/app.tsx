import { Page } from "./Page"

const Clock = {
	$$typeof: Symbol.for("react.module.reference"),
	filepath: "src/Clock.tsx",
	name: "Clock",
} as unknown as React.ComponentType

export const App = () => {
	return (
		<Page>
			<p>Hello, world!</p>
			<Clock />
		</Page>
	)
}
