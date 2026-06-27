
const User = require("../../Models/User")
const crypto = require("crypto")
const nodemailer = require("nodemailer")
const forgetPassword =  async (req , res)=>{
    try {
        const {email} = req.body

        const existingUser  = await User.findOne({email})

        if(!existingUser){
            return res.status(404).json({
                message: "User not found"
            })
        }


        const resetToken = crypto.randomBytes(32).toString("hex")
            const resetTokenExpiry = new Date(Date.now() + 15 * 60 * 1000)

            existingUser.resetToken = resetToken
            existingUser.resetTokenExpiry  = resetTokenExpiry
            await existingUser.save()
            
// it will update the original mongo db

        
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth:{
                    user: process.env.EMAIL_USER ,
                    pass: process.env.EMAIL_PASS
                }
            })
 
            // reset link with token in URL
const resetLink = `http://localhost:5173/reset-password/${resetToken}`
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: req.body.email,
                subject: "Stay-Casa Password Reset",
                html: ` <h2>Reset Your Password</h2>
                <p>Click the link below. It expires in 15 minutes.</p>
                <a href="${resetLink}">Reset Password</a>
                <p>If you didn't request this, ignore this email.</p>
                `
            })

return res.status(200).json({
    message: "Reset link sent to your email"
}
)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}

module.exports = forgetPassword