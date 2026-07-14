const express  =require("express")
const webhookController = require("../Controllers/Payment/webhookController")
const Webhookrouter = express.Router()

router.post("/webhook" , webhookController)

module.exports = Webhookrouter