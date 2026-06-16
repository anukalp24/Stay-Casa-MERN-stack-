const express = require("express")
const authMiddleware = require("../Middleware/authMiddleware")
const  getDashboardHomes = require("../Controllers/dashboard/Gethome")
const dashboard = express.Router()
dashboard.get("/dashboard" ,  authMiddleware ,  getDashboardHomes)

module.exports = dashboard