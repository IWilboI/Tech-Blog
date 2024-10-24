const router = require('express').Router();
const { Post } = require('../../models'); // Make sure you import your Post model

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts); // Or render a view
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new post
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            userId: req.session.userId, // Assuming you store user ID in session
        });
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Add more routes (like GET by ID, UPDATE, DELETE) as needed

module.exports = router;
