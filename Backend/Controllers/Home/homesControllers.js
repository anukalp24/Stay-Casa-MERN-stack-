
// const { client } = require("../database/connection")
// const gethomes = async(req , res)=>{
//    const db = client.db("airbnb")
//    const homesCollection = db.collection("homes")
//    const data = await homesCollection.find().toArray()
//    res.json(data)
// }

// module.exports = gethomes



//  mongoose way baby

// const Home = require("../../Models/Home")
//  const gethomes =  async (req , res)=>{
//     const homes = await Home.find({
//       owner: req.user.id
//     })
//     res.json(homes)
//  }
//   now it will give only a particualr user house not everyone
//  module.exports = gethomes
//  but we want all homes so we will not use this




const Home = require("../../Models/Home")
 const gethomes =  async (req , res)=>{
    const homes = await Home.find()
    res.json(homes)

    // find means no filter so it will giovw u all homes
 }
//  now it will give only a particualr user house not everyone
 module.exports = gethomes




