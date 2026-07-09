
const Home =   require("../../Models/Home")

const deletehome = async (req , res)=>{
 

    const deletedHome  = await Home.findOneAndDelete({
        _id: req.params.id,
        owner: req.user.id
    })

    if(!home){
        return res.status(404).json({
            message: "Home not found or not Authorized"
        })
    }
 

    await Home.findByIdAndDelete(req.params.id)
        return res.status(200).json({
        message: "Home Deleted Successfully"
    })

}
module.exports = deletehome  