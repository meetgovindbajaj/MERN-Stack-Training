const adminSignup = (req, res, next) => {
    console.log(req.body);
    return res.json({
        'message': 'Admin Signed Up'
    });
}
const adminLogin = (req, res, next) => {
    console.log(req.body.firstName);
    res.status(200).json({
        'message': 'Admin Logged In'
    });
}
exports.adminSignup = adminSignup;
exports.adminLogin = adminLogin;