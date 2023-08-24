const router = require('express').Router();
<<<<<<< HEAD
=======
const projectRoutes = require('./projectRoutes');
>>>>>>> e91bd3c5a244beb93e85639e91ff0e33e4e124d3
const commentRoutes = require('./commentRoutes');
const songRoutes = require('./songRoutes'); 
const projectRoutes = require('./projectRoutes'); 
const userRoutes = require('./userRoutes');

<<<<<<< HEAD
// updated routes
=======
router.use('/projects', projectRoutes);
>>>>>>> e91bd3c5a244beb93e85639e91ff0e33e4e124d3
router.use('/comments', commentRoutes);
router.use('/songs', songRoutes);
router.use('/projects', projectRoutes);
router.use('/users', userRoutes);

module.exports = router;
