const router = require('express').Router();
const { BlogPost } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.findAll();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const newPost = await BlogPost.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.session.userId, 
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
