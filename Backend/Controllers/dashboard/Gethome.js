
const Home = require("../../Models/Home")
 const gethomes =  async (req , res)=>{
    const homes = await Home.find({
      owner: req.user.id
    })
    res.json(homes)
 }
 module.exports = gethomes
