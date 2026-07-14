const mongoose = require("mongoose")

const PaymentSchema = new mongoose.Schema({
    user: {
        required: true,
        type:  mongoose.Schema.Types.ObjectId,
    }, 

home: {
    type: String,
    required: true
} ,

checkIn:{
     type: Date,
     required: true
},

checkOut:{
    type:  Date,
    required: true
}  , 

totalPrice: {
    required: true,
    type: Number
}
,

paymentStatus: {
    required: true,
    type: String
}

})


const Payment = mongoose.model("payment" , PaymentSchema)

module.exports = Payment
