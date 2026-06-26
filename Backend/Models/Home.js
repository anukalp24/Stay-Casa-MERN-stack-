const mongoose = require("mongoose")


const HomeSchema = new mongoose.Schema({
    propertyName:  {
        type: String,
        required: true
    } ,

    cityname: {
        type: String,
        required: true
    } ,

    price:{
      type:Number,
      required:true
   },

   rating:{
      type:Number,
      required:true
   },

   file:{
      type:String,
      required:true
   },

   desc:{
      type:String,
      required:true
   },

   wishlist:{
      type:Boolean,
      default:false
   },
     owner: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Users"
       },

       category:{
         type: String,
           required:true
       },
       country: {
         type: String,
           required:true
       }
       
})



HomeSchema.index({
   owner: 1
})

HomeSchema.index({
    cityname: 1,   
})




// schema is just a blueprint baby
// A Home should have:
// title
// price
// location

// No database operation can happen with just a schema.


// const Home = mongoose.model("Home" , HomeSchema)

// Mongoose creates a special Model object internally and returns it.

// You store it inside your variable:

// Home


// string home is the model name
// Mongoose uses it to create/find the collection
// This line creates a Model.

// Think:

// Schema = Rules

// Model = Object that can perform CRUD

// After this line, Home becomes an object with methods like:

// Home.create()
// Home.find()
// Home.findById()
// Home.findByIdAndUpdate()
// Home.findByIdAndDelete()


// Remember this line:


const Home = mongoose.model("Home", HomeSchema)
// When Mongoose creates the Model object, it stores:

// Model Name = Home
// Schema = HomeSchema
// Collection = homes
// Connection = MongoDB connection


// thats how homes got all the collection

module.exports = Home