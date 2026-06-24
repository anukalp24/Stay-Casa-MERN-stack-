
// const { ObjectId } = require("mongodb")
// const { client } = require("../database/connection")

// const updatehome = async (req, res) => {

//    console.log("CONTROLLER HIT")

//    const db = client.db("airbnb")
//    const homecollection = db.collection("homes")

//    const { _id, ...updatedData } = req.body

//    await homecollection.updateOne(
//       {
//          _id: new ObjectId(req.params.id)
//       },
//       {
//          $set: updatedData
//       }
//    )


//    const home = await homecollection.findOne({
//       _id:new ObjectId(req.params.id)
//    })

//    res.json(home)
 
// }

// module.exports = updatehome
// Mongoose way baby


const Home = require("../../Models/Home")

const updateHome =  async (req , res)=>{

    const home = await Home.findById(req.params.id)
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

const result = await Home.findByIdAndUpdate(
req.params.id ,
     req.body  , 
     {new: true}
)

res.json(result)
}

module.exports = updateHome

