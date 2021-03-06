import { sign } from "jsonwebtoken"

interface User {
	user_id: number
	username: string
	email: string
}

export const generateTokens = (user: User) => {
	const { user_id, username, email } = user

	const access_token = sign({ user_id, email, username }, process.env.ACCESS_TOKEN_SECRET!, {
		expiresIn: "15m",
	})
	const refresh_token = sign({ user_id }, process.env.REFRESH_TOKEN_SECRET!, {
		expiresIn: "30d",
	})

	return { access_token, refresh_token }
}
