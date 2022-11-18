const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const Blog = require('../models/blogModel');
const userSignup = router.post('/signup', async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
        dob
    } = req.body;
    if (!firstName || !lastName || !email || !password || !dob) {
        return res.status(422).json({
            message: 'Please fill the details..'
        })
    }
    try {
        const userExist = await User.findOne({
            email: email
        })
        if (userExist) {
            return res.status(422).json({
                error: "Email is Already Existed"
            });
        } else {
            const user = new User({
                firstName,
                lastName,
                email,
                password,
                dob
            });
            const userReister = await user.save();
            res.status(201).json({
                message: "Successfully Registered"
            });
        }
    } catch (error) {
        console.log(error);
    }
})
const userLogin = router.post('/login', async (req, res) => {
    let token;
    try {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                error: "Please Fill the details"
            });
        }
        const userLogin = await User.findOne({
            email: email
        });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            if (!isMatch) {
                res.status(400).json({
                    error: "Invalid Credentials 1234"
                });
            } else if (isMatch) {
                res.json({
                    message: "User Login Successfully"
                });
            }
        } else {
            res.status(400).json({
                error: "Invalid Credentials"
            });
        }
    } catch (error) {
        console.log(error);
    }
})
const getUser = router.get("/getUser/:id", async (req, res) => {
    console.log("Its Running")
    try {
        const userExist = await User.findById(req.params.id);
        console.log(req.params.id);
        if (userExist) {
            return res.send(userExist);
        }
    } catch (e) {
        res.send("no");
    }
})
const postBlog = router.post('/postBlog', async (req, res) => {
    const {
        heading,
        blog,
        userID
    } = req.body;
    if (!heading || !blog || !userID) {
        return res.status(422).json({
            error: "Please Fill details of postBlog"
        });
    }
    try {
        const user = new Blog({
            heading,
            blog,
            userID
        });
        const userReister = await user.save();
        res.status(201).json({
            message: "Successfully Registered Blog"
        });
    } catch (error) {
        console.log(error);
    }
})
const getBlog = router.get("/getBlog/:id", async (req, res) => {
    console.log("Its Running");
    try {
        const blogExist = await Blog.findById(req.params.id);
        if (blogExist) {
            console.log(blogExist.heading);
            return res.send({
                BlogHeading: blogExist.heading,
                BlogContent: blogExist.blog
            });
        }
    } catch (e) {
        res.send("no");
    }
})
exports.userSignup = userSignup;
exports.userLogin = userLogin;
exports.getUser = getUser;
exports.postBlog = postBlog;
exports.getBlog = getBlog;