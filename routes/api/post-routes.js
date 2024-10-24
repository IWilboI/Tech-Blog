const router = require('express').Router();
const { Post } = require('../../models');

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new post
router.post('/', async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id, // Assuming you set user_id in session
    });
    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a post
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
