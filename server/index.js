require('dotenv').config()

const express = require('express')
const cors = require('cors')
const config = require('./config/env')
const connectDB = require('./db/connect.db')
const productRoute = require('./routes/product.routes.js')
const authRouter = require('./routes/auth.routes')

const app = express()
app.use(cors({
  origin: 'http://localhost:4200'
}))
app.use(express.json());
connectDB()

app.use('/products',productRoute)
app.use('/auth', authRouter)

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`)
})
