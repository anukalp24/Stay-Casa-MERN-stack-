const Home = require("../../Models/Home")

const PriceFilter = async (req , res)=>{


    try {

        const home = await Home.find({
            price: {
                $gte: req.body.price[0],
                $lte: req.body.price[1]
            }
        })
        
        if(home.length === 0){
            return res.status(404).json({
                home: [],
                message: "No properties found in this price range"
            })
        }

        res.status(200).json({
            home: home
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server issue"
        })
    }
}


module.exports = PriceFilter