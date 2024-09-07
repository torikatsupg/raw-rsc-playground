import { Client } from "./Client"
import { Page } from "./Page"

export const App = () => {
	return (
		<Page>
			<p>Hello, world!</p>
			<Client.Clock />
		</Page>
	)
}
