const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const blog = new Schema({
    heading: {
        type: String,
        required: true
    },
    blog: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    }
})
blog.plugin(uniqueValidator);
const Blog = mongoose.model('blog', blog);
module.exports = Blog;