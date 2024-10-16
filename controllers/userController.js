const { User, BlogPost, Comment } = require('../models/index');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

module.exports = {
  async signup(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('signup', { errors: errors.array() });
    }

    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
      await User.create({ username, password: hashedPassword });
      req.session.userId = username;
      res.redirect('/');
    } catch (error) {
      res.render('signup', { error: 'User already exists' });
    }
  },

  async login(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.render('login', { error: 'Invalid username or password' });
    }

    req.session.userId = user.username;
    res.redirect('/');
  },

  logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        return res.redirect('/');
      }
      res.clearCookie('connect.sid');
      res.redirect('/');
    });
  },
};
