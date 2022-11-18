const HttpError = require('../utills/httpError');
const adminSignup = (req,res,next) => {
    console.log(req.body);
    return res.json({'message':'AdminSignedUp'});
}


    const adminLogin = (req,res,next) => {
        console.log(req.body);
        res.status(200).json({'message':'AdminLoggedIn'});
    }

        exports.adminLogin = adminLogin;
        exports.adminSignup = adminSignup;