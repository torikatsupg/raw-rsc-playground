import { Client } from "./Client.js"
import { Page } from "./Page.js"

export const App = () => {
	return (
		<Page>
			<p>Hello, world!</p>
			<Client.Clock />
		</Page>
	)
}
