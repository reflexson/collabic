const router = require('express').Router();
const { User, Song, Comment, Project } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  // try {
  //   const songData = await Song.findAll({
  //     include: [
  //       {
  //         model: User,
  //         attributes: ['username'],
  //       },
  //     ],
  //   });

    // const songs = songData.map((song) => song.get({ plain: true }));

    res.render('homepage', {
      // songs,
      logged_in: req.session.logged_in,
    });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/allprojects', withAuth, async (req, res) => {
  // try {
  //   const userData = await User.findByPk(req.session.user_id, {
  //     attributes: {
  //       exclude: ['password'],
  //     },
  //     include: [
  //       {
  //         model: Project,
  //         include: [Comment], 
  //       },
  //     ],
  //   });

  //   const user = userData.get({ plain: true });

    res.render('allprojects', {
      // ...user,
      logged_in: req.session.logged_in,
    });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/allprojects');
    return;
  }

  res.render('login');
});

router.get('/signUp', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/allprojects');
    return;
  }
  res.render('signUp');
});

module.exports = router;
