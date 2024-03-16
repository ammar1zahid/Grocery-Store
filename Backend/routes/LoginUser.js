// Importing required modules
const express = require('express');
const router = express.Router();
const User = require('../models/Users')
const { body, validationResult } = require('express-validator') 


// Route for handling user login
router.post("/loginUser" ,[
    // Validation middleware for email and password
    body('email','incorrect email format').isEmail(),
    body('password','Password length should be minimum 5 characters').isLength({min:5})
],  
    // Async function to handle the login process
    async (req,res)=>{
        // Validate request body against defined validations
        const errors =validationResult(req);

        // If there are validation errors, return a 400 response with the errors
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
    
        // Extracting email from request body
        let email=req.body.email;
    
    try{
        // Finding a user with the provided email in the database
        let userData = await User.findOne({email})

        // If no user found with the provided email, return an error response
        if(!userData)
        {
            return res.status(400).json({ success: false, error: 'No user with this email exists' });
        }

        // Comparing the provided password with the stored password in the database
        if(req.body.password !== userData.password)
        {
            return res.status(400).json({ success: false, error: 'invalid password' });
        }

       // If everything is successful, return a success response
        return res.json({success: true}); 

    }catch(err){
        console.log(err)
        // Return a general error response
        res.json({success: false});
        res.status(500).json({ success: false, error: 'Internal server error' });
    }

})

// Exporting the router for use in other modules
module.exports=router;