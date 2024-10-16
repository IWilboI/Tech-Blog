const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const blogRoutes = require('./api/blogRoutes');

router.use('/api/users', userRoutes);
router.use('/api/blogs', blogRoutes);

module.exports = router;
