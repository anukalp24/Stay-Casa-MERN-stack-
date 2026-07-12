


const Home = require("../../Models/Home")

const updateHome =  async (req , res)=>{

  try {
     const home = await Home.findOneAndUpdate({
        _id: req.params.id,
        owner: req.user.id
    } ,

req.body,
{new: true}
)



if(!home){
    return res.status(404).json({
        message: "Home not found"
    })
}


return res.status(200).json({
home: home,
message: "Home updated successfully"
})

  } catch (error) {
    return res.status(500).json({
        message: "Internal error"
    })
  }


}

module.exports = updateHome

