


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

