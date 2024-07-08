const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

// Create a new user
router.post('/', userControllers.createUser);

// Get all users
router.get('/', userControllers.getAllUsers);

// Get a user by ID
router.get('/:id', userControllers.getUserById);

// Update a user by ID
router.put('/:id', userControllers.updateUser);

// Delete a user by ID
router.delete('/:id', userControllers.deleteUser);

module.exports = router;