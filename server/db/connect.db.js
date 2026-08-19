const mongoose = require('mongoose')
const config = require('../config/env')

const connectDB = () => {
    mongoose.connect(config.mongoUri).then(() => {
        console.log("DB connected successfully")
    })
}


module.exports = connectDB
