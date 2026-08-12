require('dotenv').config()

const express = require('express')
const config = require('./config/env')
const connectDB = require('./db/connect.db')
const productRoute = require('./routes/product.routes.js')

const app = express()
app.use(express.json());
connectDB()

app.use('/products',productRoute)



app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`)
})
