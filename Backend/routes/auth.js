const express = require("express")
const auth = express.Router()
const signin = require("../Controllers/Auth/signinController")
const login = require("../Controllers/Auth/loginController")
const forgetPassword = require("../Controllers/Auth/forgotPassword")
const ResetPassword = require("../Controllers/Auth/ResetPassword")
auth.post("/signin", signin)
auth.post("/login", login)
auth.post("/forget-Password" , forgetPassword )
auth.post("/reset-password/:token" , ResetPassword )


module.exports = auth