
// fetch and display comments for a song
async function getComments(songId) {
    const response = await fetch(`/api/songs/${songId}/comments`);
    if (response.ok) {
      const comments = await response.json();
      const commentsList = document.querySelector('.commentsList'); 
      commentsList.innerHTML = ''; // clear existing comments
      comments.forEach(comment => {
        const commentItem = document.createElement('li');
        commentItem.textContent = comment.comment_description;
        commentsList.appendChild(commentItem);
      });
    } else {
      console.error('Failed to fetch comments');
    }
  }
  // comment submission function 
  async function submitComment(songId, commentText) {
    const response = await fetch(`/api/songs/${songId}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        text: commentText,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      // refresh comments after submit
      getComments(songId);
    } else {
      console.error('Failed to submit comment');
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {

    const songId = document.querySelector('#audio-player').dataset.songId;
    const commentForm = document.querySelector('.commentForm');
    const commentText = document.querySelector('#commentText');
  
    // display comments when the page loads initially
    getComments(songId);
  
    // submit comment 
    commentForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const text = commentText.value;
      if (text) {
        await submitComment(songId, text);
        commentText.value = ''; // Clear the comment text field
      }
    });
  
  });
  