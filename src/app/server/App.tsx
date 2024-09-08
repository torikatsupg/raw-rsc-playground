import { Suspense } from "react"
import { Client } from "./Client.js"
import { Page } from "./Page.js"
import { Profile } from "./Profile.js"
import { Container } from "./Container.js"

export const App = () => {
	return (
		<Page title="RSC Sample">
			<Container title={"Suspence"}>
				<Suspense fallback={<p>{"Loading..."}</p>}>
					<Container title={"Profile(server)"} color="blue">
						<Profile />
					</Container>

					<Container title={"Counter(client)"} color="green">
						<Client.Counter />
					</Container>
				</Suspense>
			</Container>

			<Container title={"Clock(client)"}>
				<Client.Clock />
			</Container>
		</Page>
	)
}
