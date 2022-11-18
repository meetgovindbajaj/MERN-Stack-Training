const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
router.get('/', (req, res) => {
    res.send(`User router`);

});
router.get('/postBlog', (req, res) => {
    res.send(`Post a blog`);
});
router.post('/signup', userController.userSignup);
router.post('/login', userController.userLogin);
router.get('/getUser/:id', userController.getUser);
router.post('/postBlog', userController.postBlog);
router.get('/getBlog/:id', userController.getBlog);
module.exports = router;