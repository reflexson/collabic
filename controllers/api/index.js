const router = require('express').Router();
const projectRoutes = require('./projectRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/projects', projectRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;

