
const Home = require("../../Models/Home")
 const gethomes =  async (req , res)=>{
  try {
     let page = Number(req.query.page)
     if(page < 1){
        page = 1
     }
  const limit = 6
  
  const skip = (page -1) * limit
  
  
  const Home = await Home.find().skip(skip).limit(limit)
     res.status(200).json(Home)

  } catch (error) {
   console.log(error)
   res.status(500).json({
      message: "Some error occured"
   })
  }
 }
 module.exports = gethomes




