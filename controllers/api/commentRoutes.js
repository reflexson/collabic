const express = require('express');
const router = express.Router();
const { comment, song } = require('../../models');

// creates a new comment for a song
router.post('/songs/:songId/comments', async (req, res) => {
  try {
    const { songId } = req.params;
    const { userId, text } = req.body;

// fetch the song by ID
    const song = await Song.findByPk(songId);

    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }

// create a new comment with timestamp and user ID
    const comment = await Comment.create({
      text,
      timestamp: new Date(), // use the current timestamp
      userId,
      songId,
    });

    return res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
});

// get comments for a specific song
router.get('/songs/:songId/comments', async (req, res) => {
  try {
    const { songId } = req.params;

// fetch song by its ID along with associated comments
    const song = await Song.findByPk(songId, {
      include: Comment,
    });

    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }

    return res.status(200).json(song.comments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
