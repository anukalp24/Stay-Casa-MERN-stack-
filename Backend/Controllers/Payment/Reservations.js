
const Paymentdocument  = require("../../Models/Payment")

const getReservedHomes  = async (req , res)=>{

    try {
        const  reservedHomes  = await Paymentdocument.find({
            owner: req.user.id
        }).populate("guest")
      
        if(reservedHomes.length === 0){
            return res.status(200).json([])  
        }
        
 
 
        return res.status(200).json(reservedHomes)
       
    
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = getReservedHomes