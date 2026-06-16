const express = require("express")
const { route } = require("./homes")
const router = express.Router()
const updatehome  = require("../Controllers/Home/Updatehomecontroller")
router.put("/edithome/:id" , updatehome)
module.exports = router