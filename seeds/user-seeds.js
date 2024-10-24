const { User } = require('../models');

const userData = [
  {
    username: 'Alice',
    password: 'password123',
  },
  {
    username: 'Bob',
    password: 'password456',
  },
];

const seedUsers = async () => {
  await User.bulkCreate(userData, {
    individualHooks: true, // Use if you have password hashing hooks
    returning: true,
  });
};

module.exports = seedUsers;
