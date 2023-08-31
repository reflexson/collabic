const newSongHandler = async (event) => {
	event.preventDefault();

	const song_name = document.querySelector('#songName').value.trim();
	const dbRadio = document.querySelector('#dbRadio');
	const gdRadio = document.querySelector('#gdRadio');
	const song_description = document.querySelector('#songDescription').value.trim();
    const projectId = document.querySelector('.newSongForm').dataset.projectid;
    const raw_url = document.querySelector('#rawUrl').value.trim();
	// const linkUrl = raw_url.slice(0,-4) + "raw=1";
	
 

	// autodetect the link type based on URL format
	let link_type = 'unknown';
	let processedUrl = raw_url;
	
	if (raw_url.includes('dropbox.com')) {
		link_type = 'db';
		// Replace ?dl=0 with ?dl=1 for direct download link
		processedUrl = raw_url.slice(0,-4) + "raw=1";
	} else if (raw_url.includes('google.com') && raw_url.includes('/file/d/')) {
		link_type = 'gd';
		const gdArray = raw_url.split('/');
		processedUrl = `https://docs.google.com/uc?export=open&id=${gdArray[5]}`;
	}
		if (song_name && song_description) {
			try {
				const response = await fetch('/api/songs', {
					method: 'POST',
					body: JSON.stringify({
						song_name,
						song_description,
						project_id: projectId,
						song_url: processedUrl,
						link_type,
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
			} catch (error) {
				console.error(error);
				// more error handling
			}
		}
	};
	
	document.querySelector('.newSongForm').addEventListener('submit', newSongHandler);


	// OLD METHOD	

//  // determine the link type based on the radio button selection
//  const link_type = gdRadio.checked ? 'gd' : 'db';
//  // logic to HOPEFULLY determine the type of link
//  let processedUrl = raw_url;
//  if (link_type === 'db') {
//    // process the dropbox URL (if needed)
//    processedUrl = raw_url.slice(0,-4) + "raw=1";
//  } else if (link_type === 'gd') {
//    const gdArray = raw_url.split('/');
//    processedUrl = `https://docs.google.com/uc?export=open&id=${gdArray[5]}`;
//  }

//  if (song_name && song_description) {
//    try {
// 	 const response = await fetch('/api/songs', {
// 	   method: 'POST',
// 	   body: JSON.stringify({
// 		 song_name,
// 		 song_description,
// 		 project_id: projectId,
// 		 song_url: processedUrl,
// 		 link_type, 
// 	   }),
// 	   headers: {
// 		 'Content-Type': 'application/json',
// 	   },
// 	 });

// 	 if (response.ok) {
// 	   document.location.replace(`/project/${projectId}`);
// 	 } else {
// 	   alert('Please fill out all fields');
// 	 }
//    } catch (error) {
// 	 console.error(error);
// 	 // error stuff
//    }
//  }
// };

// document.querySelector('.newSongForm').addEventListener('submit', newSongHandler);


	
// 	if (song_name && song_description) {
		
// 		const response = await fetch('/api/songs', {
// 			method: 'POST',
// 			body: JSON.stringify({
// 				song_name, 
// 				song_url:linkUrl,
// 				song_description,
// 				project_id: projectId,
// 				// song_url: raw_url
//             }),
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		});

// 		if (response.ok) {
// 			document.location.replace(`/project/${projectId}`);
// 		} else {
// 			alert('Please fill out all fields');
// 		}
// 	}
// };



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