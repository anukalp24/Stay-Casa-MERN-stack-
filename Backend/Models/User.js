const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    },
  
refreshToken: {
    type: String,
    default: ""
},
resetToken: {
    type: String,
    default: ""
}  ,
resetTokenExpiry: {
type: Date,
default: ""
}
})

const User = mongoose.model("User" , userSchema)
module.exports = User