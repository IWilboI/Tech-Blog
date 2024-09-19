const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection'); 
const controllers = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'secret', 
  resave: false,
  saveUninitialized: true,
}));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/', controllers); 

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});
