const jwt  = require("jsonwebtoken")
const User = require("../../Models/User")

const refreshTokenFunc = async (req , res)=>{
    try {
        const refreshToken = req.cookies.refreshToken

        if(!refreshToken){
            return res.status(401).json({
                message: "Please login"
            })
        }
        // check if cookies is still valid as its time is 30 days
        const decoded = jwt.verify(refreshToken , process.env.JWT_REFRESH_SECRET)

const exist = await User.findOne({
    refreshToken: refreshToken
})


if(!exist){
    return res.status(404).json({
        message: "Not authorized"
    })
} 
 
 

const newAccessToken = jwt.sign({
    id: exist._id
},
// we can also use decoded.id aswell but we are checking from db

process.env.JWT_SECRET,
{expiresIn: "15m"})

res.status(200).json({
    message: "new access token generated successfully",
    newAccessToken
})



    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Some error occured"
        })
    }
}

module.exports = refreshTokenFunc
// very imp detail thats why we need database check also Tampered token → jwt.verify() catches it.
// Expired token → jwt.verify() catches it.
// Logged out / revoked / replaced refresh token → Database check catches it.





// jwt.verify() checks:

// ✅ Is the signature correct?
// ✅ Was this token signed using JWT_REFRESH_SECRET?
// ✅ Has it expired?
// ✅ Has anyone modified it?

// If all checks pass:

// decoded

// becomes something like:

// {
//     id: "687f9ab8...",
//     iat: 1751654545,
//     exp: 1754246545
// }






