const router = require('express').Router();
const authRoutes = require('../../controllers/auth-controller');

router.use('/', authRoutes);

module.exports = router;
