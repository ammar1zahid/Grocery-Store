// routes/products.js
const express = require('express');
const router = express.Router();
const ProductModel = require('../models/Products');

// Declare a global variable to store product data
global.foodProducts = [];


// POST endpoint to insert a new product
router.post('/products', async (req, res) => {
  try {
    const newProduct = await ProductModel.create(req.body);
    
    //console.log('Inserted Product:', newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error inserting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET endpoint to fetch all products
router.get('/products', async (req, res) => {
  try {
    const products = await ProductModel.find();

        // Assign the fetched products to the global variable
        global.foodProducts = products;

        
    //console.log('Fetched Products:', products);
    //res.status(200).json(global.foodProducts);
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// GET endpoint to Delete a product
router.delete('/deleteUser/:id',(req,res) => {
  const id = req.params.id
  ProductModel.findByIdAndDelete({_id:id})
  .then(res => res.json(res))
  .catch(err => res.json(err))
})


router.get('/getProduct/:id',(req,res) => {
  const id = req.params.id
  ProductModel.findById({_id:id})
  .then(products => res.json(products))
  .catch(err => res.json(err))
})


router.put('/UpdateProduct/:id',(req,res) => {
  const id = req.params.id
  ProductModel.findByIdAndUpdate({_id:id},{
      name: req.body.name, 
      description:req.body.description, 
      image: req.body.image,
      price: req.body.price,
      category: req.body.category
  })
  .then(products => res.json(products))
  .catch(err => res.json(err))
})

module.exports = router;
