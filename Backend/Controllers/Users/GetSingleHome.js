const Home = require("../../Models/Home");
const User = require("../../Models/User")
const jwt = require("jsonwebtoken")
const GetSingleHome = async (req, res) => {
  try {

    const home = await Home.findById(req.params.id).populate("owner");
    const refreshToken = req.cookies.refreshToken
    if(!home){
      return res.status(404).json({
        message: "Home not found"
      })
    }


if(refreshToken){

  try {
    
    const verify  =  jwt.verify(refreshToken , process.env.JWT_REFRESH_SECRET)
    
  const findUser = await User.findOne({
  _id: verify.id
})

if(!findUser){
  return res.status(404).json({
    message: "User not found"
  })
}

if(findUser.admin === true){
  return res.status(200).json({
    home:home
  })
}

} 


catch (error) {

}
}

  res.status(200).json({
    message: "Home fetched successfully",
    home,
  });
  
  
} catch (error) {
  console.log(error);
  
  res.status(500).json({
    message: "Internal server error",
  });
}
};

module.exports = GetSingleHome;