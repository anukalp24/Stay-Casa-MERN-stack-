const express = require("express")
const auth = express.Router()
const signin = require("../Controllers/Auth/signinController")
const login = require("../Controllers/Auth/loginController")
const forgetPassword = require("../Controllers/Auth/forgotPassword")
const ResetPassword = require("../Controllers/Auth/ResetPassword")

const rateLimiter = require("../Middleware/rateLimiter")
auth.post("/signin", rateLimiter ,  signin)
auth.post("/login", rateLimiter ,  login)
auth.post("/forget-Password" , rateLimiter , forgetPassword )
auth.post("/reset-password/:token" , ResetPassword )


module.exports = auth