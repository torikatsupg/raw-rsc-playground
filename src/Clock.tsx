import { useEffect, useState } from "react"

export const Clock = () => {
	const [time, setTime] = useState("")

	useEffect(() => {
		const timerId = setInterval(() => {
			setTime(new Date().toLocaleTimeString())
		}, 1000)

		return () => clearInterval(timerId)
	}, [])

	return <p>{time}</p>
}
