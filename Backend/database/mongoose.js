const mongoose = require("mongoose")
const connectDB  =  async ()=>{
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/airbnb`)

     console.log("Mongooses is connected baby 😄 ")
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB