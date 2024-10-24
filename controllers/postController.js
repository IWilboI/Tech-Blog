const express = require('express');
const router = express.Router();
const { Post } = require('../models'); // Adjust the path as necessary

// Fetch posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.findAll();
        const plainPosts = posts.map(post => post.get({ plain: true })); // Converts instances to plain objects
        res.render('posts', { posts: plainPosts }); // Pass plain objects to the template
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
