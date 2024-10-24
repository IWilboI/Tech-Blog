const express = require('express');
const router = express.Router();
const { Comment } = require('../../models'); // Adjust path as necessary

// POST a new comment
router.post('/', async (req, res) => {
    try {
        const comment = await Comment.create({
            content: req.body.content,
            postId: req.body.postId,
            userId: req.body.userId,
        });
        res.status(201).json(comment);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Other routes can go here

module.exports = router;
