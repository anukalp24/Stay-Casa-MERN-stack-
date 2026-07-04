const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
refreshToken: {
    type: String,
    default: ""
}
})
// why this fedault ""
const User = mongoose.model("User" , userSchema)
module.exports = User

