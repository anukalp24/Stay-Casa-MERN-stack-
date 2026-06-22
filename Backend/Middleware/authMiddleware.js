const jwt = require("jsonwebtoken")

 const authMiddleware = (req , res , next) =>{
const token = req.headers.authorization
// we are getting this from add home request from react here and it is being decoded for the controller and databse  to use it

const decoded = jwt.verify(token , process.env.JWT_SECRET)
console.log(decoded)
// {
//     id: "abc123userId",
//     iat: 1718600000    // issued at timestamp (added automatically by jwt)
// }
// this is decoded bro


req.user = decoded
// we are using decoded because right now its a plain string so we have to extract id and other things seperately for database
// here we are sending the token as controller ko bhi pata chalna chahiye
next()

 }
 module.exports = authMiddleware




// Now verify does:

// Step 1

// Extract:

// Header
// Payload
// Signature

// from the token.

// Step 2

// Take:

// Header
// Payload
// JWT_SECRET

// and run the SAME algorithm used during sign().

// Imagine:

// Header
// +
// Payload
// +
// JWT_SECRET
// ↓
// Algorithm
// ↓
// Expected Signature = ABC123
// Step 3

// Compare:

// Expected Signature
// =
// ABC123

// with:

// Signature inside token
// =
// ABC123

// If:

// ABC123 === ABC123

// ✅ Valid token

// If attacker changed:

// Payload:
// { id: "anukalp" }

// then verify calculates:

// Expected Signature = XYZ999

// but token still contains:

// ABC123

// Now:

// XYZ999 !== ABC123

// ❌ Invalid token



