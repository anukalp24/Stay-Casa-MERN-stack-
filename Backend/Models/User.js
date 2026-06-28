const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    resetToken: String,
    resetTokenExpiry: Date
})

const User = mongoose.model("User" , userSchema)
module.exports = User

// mongo db shoudl also know how created the home