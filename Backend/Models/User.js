const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    resetToken: String,
    resetTokenExpiry: Date
})

const user = mongoose.model("Users" , userSchema)
module.exports = user

// mongo db shoudl also know how created the home