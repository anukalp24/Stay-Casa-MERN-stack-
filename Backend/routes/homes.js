const {client} = require("../database/connection")
const express  = require("express")
const userget = express.Router()
const gethomes = require("../Controllers/Home/homesControllers")
userget.get("/" , gethomes )
module.exports = userget