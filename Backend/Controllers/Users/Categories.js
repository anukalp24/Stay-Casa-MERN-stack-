const Home = require("../../Models/Home")

const categories =  async (req , res)=>{

    try {
        const categories = await Home.find({
         category:  req.body.categories
        })

        if(categories.length === 0){
          return  res.status(404).json({
                message: "Category not found"
            })
        }

      return  res.status(200).json({
            message: "Category send by the backend",
            categories
        })
        
    } catch (error) {
       return res.status(500).json({
            message: "Some error occured"
        
        })

    }
}

module.exports = categories