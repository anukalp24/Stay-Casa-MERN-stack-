// const { client } = require("../database/connection")


// const addhome = async(req,res)=>{
//    const db = client.db("airbnb")
//    const homesCollection = db.collection("homes")

//  const result =   await homesCollection.insertOne(req.body)    //  here we are updating mongo db  

//  const home = await  homesCollection.findOne({
//   _id: result.insertedId
//  })
// //  it auotmatic creates an id here at this point                         '
// res.json(home)
// }
// module.exports = addhome

// Mongooose



const Home = require("../../Models/Home")
const addhome = async(req , res)=>{

    const file = `http://localhost:4090/uploads/${req.file.filename}` 
    const result = await Home.create({
        ...req.body ,
            file: file,
         owner: req.user.id
    })
console.log(req.user)
    res.json(result)
}
module.exports = addhome;



