const express = require('express');
const { engine } = require('express-handlebars'); // Updated import statement
const session = require('express-session'); // If using sessions
const routes = require('./routes'); // Ensure this path is correct
const sequelize = require('./config/connection'); // Update based on your actual connection file

const app = express();
const PORT = process.env.PORT || 3001;




// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public')); // This serves static files from the public directory

// Handlebars setup
app.engine('handlebars', engine()); // Updated line for setting up Handlebars
app.set('view engine', 'handlebars');

// Use routes
app.use(routes);

// Sync Sequelize models and start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening on http://localhost:${PORT}`);
    });
});
