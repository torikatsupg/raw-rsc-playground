import { Clock } from "./Clock.js"

export const allClientComponents = {
	Clock,
} satisfies { [K in keyof ClientComponents]: React.FC<ClientComponents[K]> }
