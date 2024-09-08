import type {} from "react/experimental"

export const Profile = async () => {
	const profile = (
		await import("../../data/test.json", { assert: { type: "json" } })
	).default

	await new Promise((resolve) => setTimeout(resolve, 2000))

	return <p>name: {profile.name}</p>
}
