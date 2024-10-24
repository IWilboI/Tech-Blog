const router = require('express').Router();
const { Post } = require('../models'); // Ensure this path is correct

// GET home page
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll(); // Fetch posts from the database
        res.render('home', { posts }); // Render the 'home.handlebars' view
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Additional routes can be added here

module.exports = router;
