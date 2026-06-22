const Home = require("../../Models/Home");

const GetSingleHome = async (req, res) => {
  try {
    const home = await Home.findById(req.params.id);
    if (!home) {
      return res.status(404).json({
        success: false,
        message: "Home not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Home fetched successfully",
      home,
    });

    
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = GetSingleHome;