const Home = require("../../Models/Home")

const dashboardHomesDetails =   async (req , res)=>{
    try {
    
        const home = await Home.findById(req.params.id)
        if(!home){
            res.status(404).json({
                message: "Home not found"
            })
        }
        


        res.status(200).json({
            home,
            message: "Home send successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}

module.exports = dashboardHomesDetails