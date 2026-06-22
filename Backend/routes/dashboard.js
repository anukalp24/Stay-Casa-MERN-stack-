const express = require("express")
const authMiddleware = require("../Middleware/authMiddleware")
const  getDashboardHomes = require("../Controllers/dashboard/Gethome")
const deletehome = require("../Controllers/Home/deleteHomeController")
const updatehome  = require("../Controllers/Home/Updatehomecontroller")
const dashboard = express.Router()


dashboard.get("/dashboard" ,  authMiddleware ,  getDashboardHomes)
dashboard.delete("/deletehome/:id" , authMiddleware ,  deletehome)
dashboard.put("/edithome/:id" , updatehome)

module.exports = dashboard