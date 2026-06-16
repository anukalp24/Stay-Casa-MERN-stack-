// const { MongoParseError } = require("mongodb")
// const {client}  = require("../database/connection")




// const getwishlist = async(req , res)=>{
//     const db  = client.db("airbnb")
//     const homecollection = db.collection("homes")

//     const homes = await homecollection.find({
//         wishlist: true
//     }).toArray()

//     res.json(homes)
// }

// module.exports = getwishlist

const Home = require("../../Models/Home")
const wishlistfunc = require("./wishlistController")

const getwishlist = async(req , res)=>{
let gethomes = await Home.find({
    wishlist: true,
    owner: req.user.id
})
res.json(gethomes)
}

module.exports = getwishlist
