const mongoose = require('mongoose');
const db = require('../config/db');
const { isEmail }= require('validator')
const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: [true,'Please Enter A Email'],
        unique: true,
        lowercase:true,
        validate:[isEmail,'Please Enter a Valid Email Address']
    },
    password: {
        type: String,
        required :[true,'Please Enter Password'],
        minlength : [6,'Min password length is 6']

    },
    

});

const userModel = db.model('user',userSchema);

module.exports = userModel;