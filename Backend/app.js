require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDb = require("./database/mongoose")
const app = express()


app.use(cors())
app.use(express.json())
app.use("/uploads" , express.static("uploads"))
// here fornt end get req will come for the image

const users = require("./routes/users")
// const wishlist = require("./routes/wishlist")
const auth = require("./routes/auth")
const dashboard = require("./routes/dashboard")

app.use(users)
// app.use(wishlist)
app.use(auth)
app.use(dashboard)
connectDb()
app.listen(4090)  
