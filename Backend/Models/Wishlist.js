const mongoose = require("mongoose")


const WishlistSchema = new mongoose.Schema({
    user: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
required: true
    },

    home: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Home",
    required: true
    }
})

module.exports = mongoose.model("Wishlist" , WishlistSchema)