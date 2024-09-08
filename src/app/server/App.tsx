import { Client } from "./Client.js"
import { Page } from "./Page.js"
import { Profile } from "./Profile.js"

export const App = () => {
	return (
		<Page>
			<p>Hello, world!</p>
			<Client.Clock />
			<Profile />
		</Page>
	)
}
