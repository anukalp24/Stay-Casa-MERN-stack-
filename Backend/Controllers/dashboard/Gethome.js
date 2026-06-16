
const Home = require("../../Models/Home")
 const gethomes =  async (req , res)=>{
    const homes = await Home.find({
      owner: req.user.id
    })
    res.json(homes)
 }

 module.exports = gethomes
// insted of this we can also do parmas.id like why we cant match the home id
// Home.find({ owner: req.user.id })
// searches the Homes collection and returns all documents whose owner field matches req.user.id.
