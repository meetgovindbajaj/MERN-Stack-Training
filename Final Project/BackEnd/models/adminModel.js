const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const adminSignup = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        uniwuq:true
    },
    password:{
        type:String,
        required: true,
        minLEngth:8
    },
    cpassword:{
        type:String,
        required: true,
        minLEngth:8
    },
    tokens:[
        {
            token:{
                type:String,
                required:true,
            }
        }
    ]


});

    adminSchema.plugin(uninqueValidator);
    module.exports =mongoose.model('Admin',adminSchema);