import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors)
app.use(express.json())

app.listen(process.env.APP_PORT, ()=> {
    console.log(`Server running at http://localhost:${process.env.APP_PORT}`)
})