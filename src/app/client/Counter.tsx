import { useState } from "react"

declare global {
	interface ClientComponents {
		Counter: {}
	}
}

export const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<p>Count: {count}</p>
			<button type="button" onClick={() => setCount((v) => v + 1)}>
				{"Increment"}
			</button>
		</div>
	)
}
