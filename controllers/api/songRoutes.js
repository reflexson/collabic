const router = require('express').Router();
const { Song } = require('../../models'); 
const withAuth = require('../../utils/auth');

// create a new song
router.post('/', withAuth, async (req, res) => {
  try {
    const newSong = await Song.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSong);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a song by ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const songData = await Song.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!songData) {
      res.status(404).json({ message: 'Song ID not found' });
      return;
    }

    res.status(200).json(songData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// just in case we need additional routes :)

module.exports = router;
