require("dotenv").config()
const cookie = require("cookie-parser")
const express = require("express")
const cors = require("cors")
const connectDb = require("./database/mongoose")
const app = express()


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json())
app.use(cookie())
app.use("/uploads" , express.static("uploads"))
// here fornt end get req will come for the image

const users = require("./routes/users")
const wishlist = require("./routes/wishlist")
const auth = require("./routes/auth")
const dashboard = require("./routes/dashboard")
const Payment = require("./routes/Payment")
const webhook = require("./routes/webhook");

app.use(users)
app.use(wishlist)
app.use(auth)
app.use(dashboard)
app.use(Payment)
app.use(webhook);

connectDb()
app.listen(4090)  
