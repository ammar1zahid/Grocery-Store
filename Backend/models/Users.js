const mongoose = require('mongoose')

//schema for user collection in db
const UserSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    } ,
    email: {
        type: String,
        required: true
    } ,
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    } 
})

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel