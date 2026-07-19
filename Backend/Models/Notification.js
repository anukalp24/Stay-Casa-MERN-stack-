const mongoose = require("mongoose")


const notificationSchema =   new mongoose.Schema({
    owner: {
        required: true,
       type:  mongoose.Schema.Types.ObjectId,
    }
,
home:{
    required: true,
    type: String
},

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

}
)


const notificationModel = mongoose.model("notification" , notificationSchema)

module.exports = notificationModel