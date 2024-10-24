const express = require('express');
const { engine } = require('express-handlebars'); // Updated import for v8.x.x
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection'); // Ensure your DB connection is correct

const app = express();
const PORT = process.env.PORT || 3000;

// Session configuration
const sess = {
  secret: 'Super secret secret', // Use env variables in production
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set up Handlebars as the view engine
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const routes = require('./routes');
app.use(routes);

// Database sync and server start
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
});
