const express = require("express")
const userpost = express.Router()
const addhome = require("../Controllers/Home/addhomeController")
const { client } = require("../database/connection")
const authMiddleware = require("../Middleware/authMiddleware")
const upload = require("../Middleware/upload")
userpost.post("/addhome" ,authMiddleware , upload.single("image") ,  addhome )

module.exports = userpost
