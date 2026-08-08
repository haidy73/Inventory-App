require('dotenv').config()

const express = require('express')
const config = require('./config/env')
const connectDB = require('./db/connect.db')

const app = express()
connectDB()



app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`)
})
