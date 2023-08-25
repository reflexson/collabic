const express = require('express');
const router = express.Router();
const { Comment, Song } = require('../../models'); 

// create a new comment for a song with a timestamp
router.post('/songs/:songId/comments', async (req, res) => {
  try {
    const { songId } = req.params;
    const { userId, text, timestamp } = req.body; // Add timestamp in request body

// fetch the song by its ID
    const song = await Song.findByPk(songId);

    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }

// create a new comment with timestamp and user ID
    const comment = await Comment.create({
      text,
      timestamp,
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

// fetch the song by its ID along with associated comments
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

// delete a comment by ID
router.delete('/comments/:commentId', async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findByPk(commentId);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    await comment.destroy();

    return res.status(204).json({ message: 'Comment deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
