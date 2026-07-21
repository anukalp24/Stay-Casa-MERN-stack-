const express = require("express")
const authMiddleware = require("../Middleware/authMiddleware")
const  getDashboardHomes = require("../Controllers/dashboard/Gethome")
const deletehome = require("../Controllers/dashboard/deleteHomeController")
const updatehome  = require("../Controllers/dashboard/Updatehomecontroller")
const dashboardHomesDetails = require("../Controllers/dashboard/DashboardHomesDetails")
const upload = require("../Middleware/upload")
const dashboard = express.Router()


dashboard.get("/dashboard" ,  authMiddleware ,  getDashboardHomes)
dashboard.delete("/deletehome/:id" , authMiddleware ,  deletehome)
dashboard.put("/edithome/:id" , authMiddleware , upload.array("files", 5),  updatehome)
dashboard.get("/dashboardHomeDetails/:id" , authMiddleware ,  dashboardHomesDetails)
module.exports = dashboard
