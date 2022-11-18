const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    dob: {
        type: Number,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
})
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 14);
    }
    next();
});
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({
            _id: this._id
        }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({
            token: token
        })
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}
userSchema.plugin(uniqueValidator);
const User = mongoose.model('USER', userSchema);
module.exports = User;