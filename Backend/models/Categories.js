const mongoose = require('mongoose')

//schema for user collection in db
const CategoriesSchema = new mongoose.Schema({

    category:{
        type: String,
        required: true
    } 
  
})

const CategoriesModel = mongoose.model("categories",CategoriesSchema)
module.exports = CategoriesModel