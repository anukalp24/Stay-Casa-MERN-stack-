const express = require("express")
const router = express.Router()
const deletehome = require("../Controllers/Home/deleteHomeController")
const authMiddleware = require("../Middleware/authMiddleware")
router.delete("/deletehome/:id" , authMiddleware ,  deletehome)
module.exports = router






