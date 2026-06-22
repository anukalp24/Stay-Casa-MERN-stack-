// const { ObjectId } = require("mongodb")
// const {client}  = require("../database/connection")


// const deletehome = async(req ,res)=>{
//     const db = client.db("airbnb")
//     const homesCollection = db.collection("homes")

//     await homesCollection.deleteOne({
//         _id: new ObjectId(req.params.id)
//     })
//     res.json({
//         success: true
//     })
// }

// nnow mongoose baby

const Home =   require("../../Models/Home")

const deletehome = async (req , res)=>{
    const home =  await Home.findById(req.params.id)
    if(!home){
        return res.status(404).json({
            message: "Home not found"
        })
    }


 
    if(home.owner.toString() !== req.user.id){
        return res.status(403).json({
            message: "Not Authorized"
        })
    }
   
    await Home.findByIdAndDelete(req.params.id)
        return res.status(200).json({
        message: "Home Deleted Successfully"
    })

}
module.exports = deletehome  