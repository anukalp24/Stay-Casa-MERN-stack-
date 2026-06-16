const {MongoClient} = require("mongodb")
const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url)
async function connectDB() {
try{

      await client.connect()

      console.log("MongoDB Connected 😄🔥")
   }
   catch(error){
      console.log("MongoDB Connection Failed ❌")
      console.log(error)

   }
}

module.exports = {
    connectDB ,  client
}