
// const { ObjectId } = require("mongodb")
// const {client} = require("../database/connection")
// const wishlistfunc = async (req , res)=>{
//  console.log("wishlist func activated")
//  const db = client.db("airbnb")
//  const homecollection = db.collection("homes")

// const {_id  , ...updated}  = req.body


// const home = await homecollection.findOne({
    // _id: new ObjectId(req.params.id)
//    
// })

// // we can skip updating fornt end eishlist as we are now just now receiving id and the mongo db is the source of truth earlier we were dependent because we were cheking the request  in backend also now we are not but still we will liek stay consistent across backend and front end

// if(home.wishlist ===  true){
//     return res.send({
        // message: "already in wishlsit"
//     })
// }
//  await homecollection.updateOne(
//     {
//         _id: new ObjectId(req.params.id)
//     } ,

//     {
//         $set: {wishlist:true}
//     }
// )
// // res.send({
// //     ... req.body,
//     // wishlist: true
// // })
// // }



// mongooses way

const Home = require("../../Models/Home")

const wishlistfunc  =  async (req , res)=>{
    const home =  await Home.findById(req.params.id)
    if (home.wishlist){
        return res.send({message: "already in wishlist"})
    }


    const update  = await Home.findByIdAndUpdate(
        req.params.id,
        {
            wishlist: true,
        },

         
        {
            new: true
        }
     )
     
     res.json(update)
    }
    
    module.exports = wishlistfunc
// Mongoose default behavior:

// Update document
// ↓
// Return old document

// Weird, but that's how it works.

// If you write:

// {
//    new: true
// }

// Now Mongoose says:

// After updating
// ↓
// Return the NEW document

// Returned value:

// {
//    title: "Villa",
//    wishlist: true








