// models/connection.js
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Ensure you have dotenv to load environment variables

// Create a new instance of Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost', // Change this if your database is hosted elsewhere
  dialect: 'postgres', // Use 'mysql', 'sqlite', etc., if you're using a different DB
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
