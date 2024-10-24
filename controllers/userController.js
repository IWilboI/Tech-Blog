const { User } = require('../models');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// User login
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user || !(await user.checkPassword(req.body.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    req.session.save(() => {
      req.session.userId = user.id;
      res.status(200).json({ user, message: 'Logged in successfully!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Export the functions
module.exports = { getAllUsers, getUserById, createUser, loginUser };
