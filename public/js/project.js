const newSongHandler = async (event) => {
	event.preventDefault();

	const song_name = document.querySelector('#songName').value.trim();
	const dbRadio = document.querySelector('#dbRadio');
	const gdRadio = document.querySelector('#gdRadio');
	const song_description = document.querySelector('#songDescription').value.trim();
    const projectId = document.querySelector('.newSongForm').dataset.projectid;
    const raw_url = document.querySelector('#rawUrl').value.trim();
	const linkUrl = raw_url.slice(0,-4) + "raw=1";
	
        // }else if(gdRadio.checked == true){
			// let gdArray= raw_url.split("/");
	// 	// 	let linkUrl = `https://docs.google.com/uc?export=open&id=${gdArray[5]}`;
	// 	};


	if (song_name && song_description) {
		
		const response = await fetch('/api/songs', {
			method: 'POST',
			body: JSON.stringify({
				song_name, 
				song_url:linkUrl,
				song_description,
				project_id: projectId,
				// song_url: raw_url
            }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			document.location.replace(`/project/${projectId}`);
		} else {
			alert('Please fill out all fields');
		}
	}
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

document
	.querySelector('.newSongForm')
	.addEventListener('submit', newSongHandler);

// document
// 	.querySelector('.projectList')
// 	.addEventListener('click', delButtonHandler);