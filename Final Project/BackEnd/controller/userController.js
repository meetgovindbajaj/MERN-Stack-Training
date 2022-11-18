const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Authentication = require("../middleware/Authenticate");
const cookieParser = require("cookie-parser");
router.use(cookieParser());

const userSignup = router.post("/signup", async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  if (!name || !email || !password || !cpassword) {
    return res
      .status(400)
      .json({ message: "Please Fill The Details..", message: res.status });
  }
  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).json({ error: "Email is Already Existed" });
    } else if (password != cpassword) {
      return res.status(400).json({ error: "password not matcing" });
    } else {
      const user = new User({ name, email, password, cpassword });
      await user.save();
      res.json({ message: "Successfully Registered....................." });
    }
  } catch (error) {
    console.error(error);
  }
});

const userLogin = router.post("/login", async (req, res) => {
  let token;
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please Fill The Details..." });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      // console.log(token);
      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 25),
        httpOnly: false,
      });
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials....    " });
      } else {
        res.json({ message: "User Login Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

const userLogout = router.get("/logout", (req, res) => {
  console.log(`Hello My Logout Page`);
  jwt.TokenExpiredError;
  res.clearCookie("jwttoken", { path: "/" });
  res.status(200).send("User Logout");
});

const userCart = router.get("/cart", Authentication, (req, res) => {
  console.log(`Hello my cart page`);
  res.send(req.rootUser);
});
exports.userLogin = userLogin;
exports.userSignup = userSignup;
exports.userLogout = userLogout;
exports.userCart = userCart;
