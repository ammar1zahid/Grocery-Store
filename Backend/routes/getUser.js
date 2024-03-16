// routes/GetUsers.js
const express = require('express');
const router = express.Router();
const UserModel = require('../models/Users');

// GET endpoint to fetch all users
router.post('/users', async (req, res) => {
  try {
    const users = await UserModel.find(); // Retrieve all users from the "users" collection
    
    // Log the users to the console
    //console.log('Fetched Users:', users);
    
    // Send the users as a JSON response
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
