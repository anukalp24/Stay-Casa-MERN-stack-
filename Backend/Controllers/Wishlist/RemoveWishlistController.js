// const {client} =  require("../database/connection")
// const wishlist = require("../routes/wishlist")
// const { ObjectId } = require("mongodb")







// const RemoveWishlist = async (req , res)=>{
//     const db = client.db("airbnb")
//     const homecollection = db.collection("homes")
//  await homecollection.updateOne({
//         _id: new ObjectId(req.params.id)
//     } , 
//     {
//     $set:{
//         wishlist: false
//     }
// }


// )
// res.send({
//     wishlist: false
// })

// }
// module.exports = RemoveWishlist



// mongoose way
// Home contains everything bro
const Home = require("../../Models/Home")
const RemoveWishlist = async (req , res)=>{

    const home = Home.findByIdAndUpdate(req.params.id , 

        {
            wishlist: false
        }
,
        {
            new: true
        }
    )

    res.json({wishlist: false })
    }


    module.exports = RemoveWishlist