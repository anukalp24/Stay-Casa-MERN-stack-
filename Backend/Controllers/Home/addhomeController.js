


const Home = require("../../Models/Home")
const addhome = async(req , res)=>{

    try {
        const file = `http://localhost:4090/uploads/${req.file.filename}`
        const result = await Home.create({
             ...req.body,
             file: file,
             owner: req.user.id
        })
  console.log(req.body)

// ques to ask
// why i mean we have to pass the url like why cant we pass the img direclty form here itself??

        res.status(201).json(result)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something went wrong"
        })
    }
  


// console.log(req.user)
// will be this
// {
//     id: "abc123userId",
//     iat: 1718600000    // issued at timestamp (added automatically by jwt)
// }

    
}
module.exports = addhome;



