const express  =require("express")
const webhookController = require("../Controllers/Payment/webhookController")
const Webhookrouter = express.Router()

Webhookrouter.post("/webhook", express.raw({ type: "application/json" }), webhookController)
module.exports = Webhookrouter