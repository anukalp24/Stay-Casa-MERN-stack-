
const Home = require("../../Models/Home")


 const gethomes =  async (req , res)=>{
  try {
     let page = Number(req.query.page)
     if(page < 1){
        page = 1
     }

     if(!page){
      const Homes = await Home.find().limit(20)
    return  res.status(200).json(Homes)
     }
     
     

     const limit = 10
  const skip = (page - 1) * limit
  

  let Homes = await Home.find({
   price: {
      $gte:  req.query.minPrice ,
      $lte:  req.query.maxPrice 
   }
  }).skip(skip).limit(limit)


     res.status(200).json(Homes)


  } catch (error) {
   console.log(error)
   res.status(500).json({
      message: "Some error occured"
   })
  }
 }


 module.exports = gethomes




// const Home = require("../../Models/Home")

// const PriceFilter = async (req , res)=>{


//     try {

//         const home = await Home.find({
//             price: {
//                 $gte: req.body.price[0],
//                 $lte: req.body.price[1]
//             }
//         })
         
//         if(home.length === 0){
//             return res.status(404).json({
//                 home: [],
//                 message: "No properties found in this price range"
//             })
//         }

//         res.status(200).json({
//             home: home
//         })
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({
//             message: "Internal server issue"
//         })
//     }
// }


// module.exports = PriceFilter
















