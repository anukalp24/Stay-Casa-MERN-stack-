const { array } = require("../../Middleware/upload")
const Home = require("../../Models/Home")
const Search =  async (req , res)=>{
    try {
     const home  = await Home.find({
        $or: [
{
            cityname: {
                $regex: req.body.name,
                $options: "i"
            }, 
        } ,


        {
            category: {
                $regex: req.body.name,
                $options: "i"
            }
        }
        ]
     })

// find returns a array 

if(home.length === 0){
        return res.status(404).json({
            message: "Home not found"
        })
     }



     res.status(200).json({
        message: "Home found succesfully",
        home: home
     })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports  = Search

