const router = require('express').Router();
const blogController = require('../../controllers/blogController');

router.get('/', blogController.getHomepage);
router.get('/dashboard', blogController.getDashboard);
router.post('/create', blogController.createPost);
router.get('/post/:id', blogController.getPost);
router.post('/post/:id/comment', blogController.addComment);

module.exports = router;
