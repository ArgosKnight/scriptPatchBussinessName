import * as dotenv from 'dotenv'

dotenv.config()

export const URL = process.env.DB_URL
export const PORT = process.env.PORT