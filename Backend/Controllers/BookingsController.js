const Payment = require("../Models/Payment")

const getBookings  =  async (req , res)=>{
    try {
        console.log(__filename);
        console.log("controller hit")

const mongoose = require("mongoose");

console.log("Controller readyState:", mongoose.connection.readyState);












     const bookedHomes = await Payment.find({
        owner: req.user.id
     })
     console.log(bookedHomes)

     if(bookedHomes.length === 0){
         console.log("no bookings found")
    return res.status(404).json({
        message: "No bookings found"
    })
     }


return res.status(200).json(bookedHomes)
console.log("resposne sended")

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal sever error"
        })
    }
}

module.exports = getBookings