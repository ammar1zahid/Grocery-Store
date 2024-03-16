const mongoose = require('mongoose')

//schema for user collection in db
const ProductSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    } ,
    description: {
        type: String,
        required: true
    } ,
    image: {
        type: String, // Assuming the image is stored as a URL/path
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
})

const ProductModel = mongoose.model("products",ProductSchema)
module.exports = ProductModel