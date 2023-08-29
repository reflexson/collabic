const newCommentHandler = async (event) => {
	event.preventDefault();

const comment_description = document.querySelector('#commentText').value.trim();
const songId = document.querySelector('.commentForm').dataset.songid;
const cueMin = document.querySelector('#cueMin').value.trim();
const cueSec = document.querySelector('#cueSec').value.trim();
const comment_owner = document.querySelector('#author').value.trim();
const comment_songTimestamp = Number(cueMin) * 60 + Number(cueSec);


 if (comment_description) {
   try {
	 const response = await fetch('/api/comments', {
	   method: 'POST',
	   body: JSON.stringify({
		comment_description,
     	comment_songTimestamp,
		comment_owner,
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


//function to set cur time\
var saved = document.getElementById("")
var aud = document.getElementById("audioPlayer");
function setCurTime() { 
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