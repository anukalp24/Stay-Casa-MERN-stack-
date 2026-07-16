const mongoose = require("mongoose")

const PaymentSchema = new mongoose.Schema({




    


    owner: {
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
} , 


stripeSessionId: {
    type: String,
    required: true,
    unique: true
} , 


    propertyName:{
         type: String,
    required: true,
    }  ,

cityname:{
     type: String,
    required: true,
} ,

desc:{
     type: String,
    required: true,
} , 

file:{
 type: String,
    required: true,
}


})



const Payment = mongoose.model("payment" , PaymentSchema)

module.exports = Payment
