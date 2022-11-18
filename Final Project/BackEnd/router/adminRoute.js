const express = require('express');
const adminController = require('../controller/adminController');
const router = express.Router();
router.post('/signup',adminController.adminSignup);
router.post('/login',adminController.adminLogin);


    module.exports=router;