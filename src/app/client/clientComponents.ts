import { Clock } from "./Clock.js"
import { Counter } from "./Counter.js"

export const allClientComponents = {
	Clock,
	Counter,
} satisfies { [K in keyof ClientComponents]: React.FC<ClientComponents[K]> }
