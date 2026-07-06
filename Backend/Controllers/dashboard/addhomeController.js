


const Home = require("../../Models/Home")
const addhome = async(req , res)=>{
 const {email} = req.body
    try {
        const file = `http://localhost:4090/uploads/${req.files}`
        const result = await Home.create({
             ...req.body,
             file: file,
             owner: req.user.id,
           
        })
// now owner will beocme like this owner: {
//    _id: "AAA111",
//    name: "Anukalp",
//    email: "anukalp@gmail.com"
// }
        await result.populate("owner")

        res.status(201).json(result)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something went wrong"
        })
    }
  
    
}
module.exports = addhome;



