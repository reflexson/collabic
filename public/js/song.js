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
	const newList = document.createElement("ul");
	newList.classList.add("list-unstyled");
	newList.innerHTML=` <li class="nav-item ">
<div class="row ">
  <div class="col s12 m6">
	<div class="card blue-grey darken-1 text-center mt-3 shadow-lg">
	  <div class="card-header project_name_bg text-white fs-4 ">
		${comment_owner} on <span id="todaysDate"></span>
		</div>
		<div class="card-body">
		<p>${comment_description}</p>
		<div class="cueTime" id=""><span id="cueStamp"></span></div>
			  <div class="col-auto my-1 text-center" id="saved">
				   <button onclick="setCurTime(${comment_songTimestamp})" type="submit" class=" cue_comment_button mb-2 rounded">Cue Comment</button>
			  </div>
	  </div>
	  <div class="card-action">
	  </div>
	</div>
  </div>
</div>     
</li>`;
node.appendChild(newList);

//set current date on comment

const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("todaysDate").innerHTML = text;

//clear input fields other than author

document.getElementById("cueMin").value ="";
document.getElementById("cueSec").value ="";
document.getElementById("commentText").value ="";

// display comment cue time text

commentCue = comment_songTimestamp;
commentCueMin = Math.floor(commentCue / 60);
commentCueSec = Math.floor(commentCue % 60);
document.getElementById("cueStamp").innerHTML = `${commentCueMin} min ${commentCueSec} sec`;

	
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

//function to throw current time
var curSeconds = document.querySelector('#cueSec');
function placeCurrentTime(){
	curSeconds.value = aud.currentTime;
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