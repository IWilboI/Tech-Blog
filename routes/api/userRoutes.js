const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser, loginUser } = require('../../controllers/userController');

// Route to get all users
router.get('/', getAllUsers);

// Route to get a user by ID
router.get('/:id', getUserById);

// Route to create a new user
router.post('/', createUser);

// Route for user login
router.post('/login', loginUser);

module.exports = router;
