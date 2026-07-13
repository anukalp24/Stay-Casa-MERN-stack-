const express = require("express")
const authMiddleware = require("../Middleware/authMiddleware")
const createCheckoutSession = require("../Controllers/Payment/createCheckoutSession")

const Router = express.Router()

Router.post("/create-checkout-session/:id" , authMiddleware , createCheckoutSession )

module.exports = Router