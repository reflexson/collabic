const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const songRoutes = require('./songRoutes'); 
const projectRoutes = require('./projectRoutes'); 
const userRoutes = require('./userRoutes');

// updated routes
router.use('/comments', commentRoutes);
router.use('/songs', songRoutes);
router.use('/projects', projectRoutes);
router.use('/users', userRoutes);

module.exports = router;
