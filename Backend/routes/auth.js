const express = require("express")
const auth = express.Router()
const signin = require("../Controllers/Auth/signinController")
const login = require("../Controllers/Auth/loginController")
auth.post("/signin", signin)
auth.post("/login", login)

module.exports = auth