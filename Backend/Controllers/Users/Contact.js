const nodemailer = require("nodemailer")
const contact =  async (req , res)=>{

    try {
        const {name , email ,  feedback} = req.body

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                  user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS 
            }
        })
        // returns a transport object



        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form" , 

            html: `
            
            <h2>New Contact Form</h2>

            <hr>

            <p><strong>Name:</strong> ${name}</p>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Message:</strong></p>

            <p>${feedback}</p>
  `
        })

// SMTP is the protocol used for sending emails.

      return  res.status(200).json({
            message: "Message sent Successfully"
        })
    } catch (error) {
        console.log(error)
       return res.status(500).json({
            message: "Failed to send message"
        })
    }
}

module.exports = contact


