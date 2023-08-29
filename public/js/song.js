const newCommentHandler = async (event) => {
	event.preventDefault();

	const comment_description = document.querySelector('#commentText').value.trim();
  const songId = document.querySelector('.commentForm').dataset.songid;

 if (comment_description) {
   try {
	 const response = await fetch('/api/comments', {
	   method: 'POST',
	   body: JSON.stringify({
		 comment_description,
    //  comment_songTimestamp,
		 song_id: songId,
	   }),
	   headers: {
		 'Content-Type': 'application/json',
	   },
	 });

	 if (response.ok) {
	   document.location.replace(`/song/${songId}`);
	 } else {
	   alert('Comment Cannot Be Blank');
	 }
   } catch (error) {
	 console.error(error);
	 // error stuff
   }
 }
};

document.querySelector('.commentForm').addEventListener('submit', newCommentHandler);


//function to set cur time
var aud = document.getElementById("audioPlayer")
function setCurTime(saved) { 
  aud.currentTime = saved;
} 	




// const delButtonHandler = async (event) => {
// 	if (event.target.hasAttribute('data-id')) {
// 		const id = event.target.getAttribute('data-id');

// 		const response = await fetch(`/api/blogs/${id}`, {
// 			method: 'DELETE',
// 		});

// 		if (response.ok) {
// 			document.location.replace('/dashboard');
// 		} else {
// 			alert('Failed to delete blog');
// 		}
// 	}
// };

// document
// 	.querySelector('.newSongForm')
// 	.addEventListener('submit', newSongHandler);

// document
// 	.querySelector('.projectList')
// 	.addEventListener('click', delButtonHandler);