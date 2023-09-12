import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors)
app.use(express.json())

let port = process.env.APP_PORT ?? 3000

app.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}`)
})