const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req,res) => {
  Project.findAll({})
  .then(ProjectData => res.json(ProjectData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: '404 Project ID not found' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
