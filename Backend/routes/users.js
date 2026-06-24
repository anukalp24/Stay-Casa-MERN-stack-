const express = require("express")
const user = express.Router()
const addhome = require("../Controllers/Home/addhomeController")
const { client } = require("../database/connection")
const gethomes = require("../Controllers/Home/homesControllers")
const authMiddleware = require("../Middleware/authMiddleware")
const searchHomes = require("../Controllers/Home/SearchController")
const upload = require("../Middleware/upload")
const categories = require("../Controllers/Home/Categories")
const GetIndividualHomes = require("../Controllers/Home/GetSingleHome")


user.post("/addhome" ,authMiddleware , upload.single("image") ,  addhome )
user.get("/" , gethomes )
user.get("/home/:id" , GetIndividualHomes )
user.post("/search" , searchHomes)
user.post("/categories" , categories)
module.exports = user