const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 2,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[+\s@]+\.[^\s@]+$/
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel
