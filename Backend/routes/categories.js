// routes/Categories.js
const express = require('express');
const router = express.Router();
const CategoriesModel = require('../models/Categories');


// Declare a global variable to store product data
global.foodCategories = [];

// GET endpoint to fetch all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await CategoriesModel.find();
    
       // Assign the fetched products to the global variable
       global.foodCategories = categories;

    //console.log('Fetched Categories:', global.foodCategories);
    
    res.status(200).json(global.foodCategories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST endpoint to insert a new category
router.post('/categories', async (req, res) => {
  try {
    
    const newCategory = await CategoriesModel.create(req.body);
    
    //console.log('Inserted Category:', newCategory);
    
    res.status(201).json(newCategory);
  } catch (error) {
    console.error('Error inserting category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
