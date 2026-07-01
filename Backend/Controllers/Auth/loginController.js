const jwt = require("jsonwebtoken")
const User = require("../../Models/User")
const bcrypt = require("bcryptjs")
const login =  async (req , res)=>{
    try {
        const {email , password}  = req.body



        
        const existingUser = await User.findOne({
        email
        })

        // it returns the whole object password name all


    
        if(!existingUser){
            return res.status(404).json({
                message: "User not found"
            })
        }

        const isMatch = await bcrypt.compare(password , existingUser.password)
        if(!isMatch){
            return res.status(401).json({
                message: "Wrong Password"
            })
        }



const token = jwt.sign({
   id: existingUser._id
}, process.env.JWT_SECRET)


         return res.status(200).json({
            message: "Login Successfully",
            token
         })
        


    } catch (error) {
        res.status(500).json({
            message: "Somehting went wrong"
        })
    }
}

module.exports =  login