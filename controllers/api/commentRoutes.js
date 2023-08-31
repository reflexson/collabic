const router = require('express').Router();
const { Comment, Song } = require('../../models');
const withAuth = require('../../utils/auth');

//get all comments
router.get('/', (req,res) => {
  Comment.findAll({})
  .then(commentData => res.json(commentData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
});

// create a new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
    });
    
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete comment

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!commentData) {
      res.status(404).json({ message: '404 Blog ID not found' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});









// creates a new comment for a song
// router.post('/song/:songId/comments', async (req, res) => {
//   try {
//     const { songId } = req.params;
//     const { userId, text } = req.body;

// fetch the song by ID
    // const song = await Song.findByPk(songId);

    // if (!song) {
    //   return res.status(404).json({ error: 'Song not found' });
    // }

// create a new comment with timestamp and user ID
//     const comment = await Comment.create({
//       text,
//       timestamp: new Date(), // use the current timestamp for a comment
//       userId,
//       songId,
//     });

//     return res.status(201).json(comment);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Server error' });
//   }
// });

// get comments for a specific song
// router.get('/song/:songId/comments', async (req, res) => {
//   try {
//     const { songId } = req.params;

// fetch song by its ID along with associated comments
//     const song = await Song.findByPk(songId, {
//       include: Comment,
//     });

//     if (!song) {
//       return res.status(404).json({ error: 'Song not found' });
//     }

//     return res.status(200).json(song.comments);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Server error' });
//   }
// });

module.exports = router;
