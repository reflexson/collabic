const router = require('express').Router();
const { User, Song, Comment, Project } = require('../models');
const withAuth = require('../utils/auth');


//default page
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

//allprojects page

router.get('/allprojects', withAuth, async (req, res) => {
	try {
		const projectData = await Project.findAll({
		});

		const projects = projectData.map((project) => project.get({
			plain: true
		}));

		res.render('allprojects', {
			projects,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});


//single project page

router.get('/project/:id', async (req, res) => {
	try {
		const projectData = await Project.findByPk(req.params.id, {
			include: [
			],
		});

		const project = projectData.get({
			plain: true
		});
		const songData = await Song.findAll({
			where: { project_id: req.params.id } 
		});

		const songs = songData.map((song) => song.get({
			plain: true
		}));

		res.render('project', {
			project,
			songs,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});


//login page

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/allprojects');
    return;
  }

  res.render('login');
});

//signUp page

router.get('/signUp', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/allprojects');
    return;
  }
  res.render('signUp');
});

module.exports = router;
