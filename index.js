require('dotenv').config()

const express = require('express')
const config = require('./config/env')
const connectDB = require('./db/connect.db')
const authRouter = require('./routes/auth.routes')

const app = express()
connectDB()

app.use(express.json())

app.use('/auth', authRouter)

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`)
})
