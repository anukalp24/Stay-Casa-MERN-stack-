require("dotenv").config()
const cookie = require("cookie-parser")
const express = require("express")
const cors = require("cors")
const connectDb = require("./database/mongoose")
const app = express()
console.log("backend hitted")
console.log(__filename);
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


const webhook = require("./routes/webhook");
app.use(webhook)
app.use(express.json())
app.use(cookie())
app.use("/uploads" , express.static("uploads"))
// here fornt end get req will come for the image

const users = require("./routes/users")
const wishlist = require("./routes/wishlist")
const auth = require("./routes/auth")
const dashboard = require("./routes/dashboard")
const Payment = require("./routes/Payment")
const Bookings = require("./routes/Bookings")
app.use(users)
app.use(wishlist)
app.use(auth)
app.use(dashboard)
app.use(Payment)
app.use(Bookings)

connectDb()
const mongoose = require("mongoose");
console.log("App readyState:", mongoose.connection.readyState);
app.listen(4090)  