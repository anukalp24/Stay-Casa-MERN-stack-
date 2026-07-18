const express  = require("express")
const BookingRouter = express.Router()
const authMiddleware = require("../Middleware/authMiddleware")


const bookingController = require("../Controllers/BookingsController")
const deleteController = require("../Controllers/DeleteBooking")
BookingRouter.get("/bookings" , authMiddleware ,   bookingController)
BookingRouter.delete("/delete-booking/:id" , authMiddleware , deleteController )
module.exports = BookingRouter