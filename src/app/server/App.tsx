import { Page } from "./Page"
import { Client } from "./Client"

export const App = () => {
	return (
		<Page>
			<p>Hello, world!</p>
			<Client.Clock />
		</Page>
	)
}
