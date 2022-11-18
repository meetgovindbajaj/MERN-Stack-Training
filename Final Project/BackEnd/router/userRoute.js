const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const userController = require("../controller/userController");
router.post("/signup", userController.userSignup);
router.post("/login", userController.userLogin);

router.get("/logout", userController.userLogout);
router.get("/cart", userController.userCart);
module.exports = router;
