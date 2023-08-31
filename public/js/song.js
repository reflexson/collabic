const newCommentHandler = async (event) => {
	event.preventDefault();

const comment_description = document.querySelector('#commentText').value.trim();
const songId = document.querySelector('.commentForm').dataset.songid;
const cueMin = document.querySelector('#cueMin').value.trim();
const cueSec = document.querySelector('#cueSec').value.trim();
const comment_owner = document.querySelector('#author').value.trim();
const comment_songTimestamp = Number(cueMin) * 60 + Number(cueSec);
// const commentList = document.getElementById('node-id');


// var playback = 10;

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
		// if(aud.paused = "false"){
		// 	 var playback = aud.currentTime;
		// }
	//    document.location.replace(`/song/${songId}`);
	const node = document.getElementById('node-id');
	node.innerHTML=` <li class="nav-item ">
<div class="row ">
  <div class="col s12 m6">
	<div class="card blue-grey darken-1 text-center mt-3 shadow-lg">
	  <div class="card-header bg-secondary text-white fs-4 ">
		${comment_owner} on <span id="todaysDate"></span>
		</div>
		<div class="card-body">
		<p>${comment_description}</p>
			  <div class="col-auto my-1 text-center" id="saved">
				   <button onclick="setCurTime(${comment_songTimestamp})" type="submit" class=" btn btn-success mb-2">Cue Comment</button>
			  </div>
	  </div>
	  <div class="card-action">
	  </div>
	</div>
  </div>
</div>     
</li>`;
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("todaysDate").innerHTML = text;
document.getElementById("cueMin").value ="";
document.getElementById("cueSec").value ="";
document.getElementById("commentText").value ="";

	
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


//function to set current time

var aud = document.getElementById("audioPlayer");
function setCurTime(event) { 
  aud.currentTime = event;
};

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