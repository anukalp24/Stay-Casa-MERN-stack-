const express = require("express")
const wishlist =  express.Router()
const wishlistfunc = require("../Controllers/Wishlist/wishlistController")
const getwishlist = require("../Controllers/Wishlist/WishlistGetcontroller")
const RemoveWishlist = require("../Controllers/Wishlist/RemoveWishlistController")
const authMiddleware = require("../Middleware/authMiddleware")


wishlist.put("/wishlist/:id" , authMiddleware ,  wishlistfunc)
wishlist.get("/wishlist" , authMiddleware ,  getwishlist)
wishlist.delete("/Removewishlist/:id" , authMiddleware ,  RemoveWishlist)
module.exports = wishlist