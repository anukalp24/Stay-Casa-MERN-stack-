const rateLimit = require("express-rate-limit")

const rateLimiter = rateLimit({

    // count request for the nwxt 15 minutes and if req more than 10 then messgae will be shown and after 15mins count reset to 0 again
    windowMs: 15 * 60* 1000 ,
    max: 10 ,
            message:{
                message: "Too many requests. Please try again after 15 minutes"
            } 
        
    
}) 

module.exports = rateLimiter