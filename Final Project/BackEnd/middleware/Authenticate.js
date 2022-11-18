const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Authenticate = async (req, res, next) => {
  try {
    // console.log("this is " , req);
    const token = req.cookies.jwttoken;
    console.log(token);
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    console.log("this is rt", rootUser);
    if (!rootUser) {
      throw new Error("User not found");
    } else {
      console.log("YEEEEEEEEEEEEEEEEEEEESSSS");
      req.token = token;
      req.rootUser = rootUser;
      req.userID = rootUser._id;
      next();
    }
  } catch (error) {
    // console.log("this is " , req);
    res.status(401).send("Unauthorized: No token Provided");
    console.log(error);
  }
};

module.exports = Authenticate;
