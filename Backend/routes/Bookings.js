const express  = require("express")
const BookingRouter = express.Router()
const authMiddleware = require("../Middleware/authMiddleware")


console.log("ROUTES ACTIVATED")

const bookingController = require("../Controllers/BookingsController")
BookingRouter.get("/bookings" , authMiddleware ,   bookingController)

module.exports = BookingRouter