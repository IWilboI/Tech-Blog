// Import required modules
const express = require('express');
const exphbs = require('express-handlebars').engine; // Ensure you are using the .engine method
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const connection = require('./config/connection'); // Correct path to connection.js
const routes = require('./routes'); // Adjust if necessary
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up session
const sess = {
    secret: 'your_secret_key', // Replace with your own secret
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: connection, // Sequelize connection
    }),
};

app.use(session(sess));

// Sync database and start the server
connection.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});

// Use routes
app.use(routes);
