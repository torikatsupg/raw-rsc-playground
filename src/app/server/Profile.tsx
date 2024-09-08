import type {} from "react/experimental"

export const Profile = async () => {
	const profile = (
		await import("../../data/test.json", { assert: { type: "json" } })
	).default

	return <p>name: {profile.name}</p>
}
