const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    resetToken: {
type: String
        
    },
    resetTokenExpiry: Date
})

const User = mongoose.model("User" , userSchema)
module.exports = User

