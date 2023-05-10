import * as dotenv from 'dotenv'

dotenv.config()

export const URL = process.env.DB_URL 
export const PORT = parseInt(process.env.PORT ?? '3000')
export const HOST = process.env.HOST