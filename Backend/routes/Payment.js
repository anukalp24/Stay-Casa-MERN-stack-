const express = require("express")
const authMiddleware = require("../Middleware/authMiddleware")
const createCheckoutSession = require("../Controllers/Payment/createCheckoutSession")
const reservationsController = require("../Controllers/Payment/Reservations")
const deleteReservationController = require("../Controllers/Payment/DeleteReservation")



const bookingController = require("../Controllers/Payment/BookingsController")
const deleteController = require("../Controllers/Payment/DeleteBooking")


const Router = express.Router()

Router.get("/bookings" , authMiddleware ,   bookingController)
Router.delete("/delete-booking/:id" , authMiddleware , deleteController )

Router.post("/create-checkout-session/:id" , authMiddleware , createCheckoutSession )
Router.get("/reservations" , authMiddleware ,  reservationsController ) 
Router.delete("/delete-reservations/:id" , authMiddleware , deleteReservationController) 



module.exports = Router