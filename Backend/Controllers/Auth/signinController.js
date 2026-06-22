  const jwt = require("jsonwebtoken");
const User = require("../../Models/User");
const bcrypt = require("bcryptjs");

const newUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
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

    const token = jwt.sign(
      {
        id: userInfo._id,
      },
      process.env.JWT_SECRET
    );

    return res.status(201).json({
      message: "Account Created",
      token,
    });
  } catch (error) { 
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
module.exports = newUser;