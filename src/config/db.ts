import { Pool } from "pg"
import { config } from "dotenv"
config()
export const pool = new Pool({
	user: process.env.PG_USER,
	host: process.env.PG_HOST,
	database: process.env.PG_DB,
	password: process.env.PG_PASSWORD,
	port: Number(process.env.PG_PORT),
	max: 2,
})
