// Importing required modules
const express = require('express');
const router = express.Router();
const User = require('../models/Users')
const { body, validationResult } = require('express-validator') 


// Route for handling user creation
router.post("/createUser",[

    // Validation middleware for email, name, and password
    body('email','incorrect email format').isEmail(),
    body('name','length should be minimum 3 characters').isLength({min:3}),
    body('password','Password length should be minimum 5 characters').isLength({min:5})
], 
     
    // Async function to handle the user creation process
    async (req,res)=>{

        // Validate request body against defined validations
        const errors =validationResult(req);

        // If there are validation errors, return a 400 response with the errors
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        
    try{

        // Check if request body is missing
        if (!req.body) {
            return res.status(400).json({ success: false, error: 'Request body is missing' });
        }

        // Creating a new user in the database with provided data
        await User.create({
            name: req.body.name ,
            email: req.body.email ,
            password: req.body.password
        })

       // Return a success response
        res.json({success: true}); 
    }catch(err){
        console.log(err)
        // Return a general error response
        res.json({success: false});
        res.status(500).json({ success: false, error: 'Internal server error' });
    }

})

// Exporting the router for use in other modules
module.exports=router;