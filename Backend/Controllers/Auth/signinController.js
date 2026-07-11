  const jwt = require("jsonwebtoken");
const User = require("../../Models/User");
const bcrypt = require("bcryptjs");
const user = require("../../routes/users");

const newUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;


const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;


    const existingUser = await User.findOne({
      email,
    });
    
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }


        if(!strongPassword.test(password)){
              return res.status(500).json({
                message: "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
              })
               }
    
    const hashedPassword = await bcrypt.hash(
      password,
      10 
    );

    
    const userInfo = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const accessToken = jwt.sign(
      {
        id: userInfo._id,
      },
      process.env.JWT_SECRET,
      {expiresIn: "15m"}
    );

    
    const refreshToken = jwt.sign({
      id: userInfo._id
    },
  process.env.JWT_REFRESH_SECRET,
  {expiresIn: "30d"}
  )

userInfo.refreshToken = refreshToken
await userInfo.save()
    


res.cookie("refreshToken" , refreshToken , {
  httpOnly: true,
  secure: false,
  sameSite: "lax",
  maxAge: 30 * 24* 60 * 60 *1000
})
// during deployment we ned to do secure true

    return res.status(201).json({
      message: "Account Created",
      accessToken : accessToken
    });
  } catch (error) { 
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
module.exports = newUser;