const newProjectHandler = async (event) => {
	event.preventDefault();

	const project_name = document.querySelector('#projectName').value.trim();

	const project_description = document.querySelector('#projectDescription').value.trim();
	console.log(project_description);
	if (project_name && project_description) {
		
		const response = await fetch('/api/projects', {
			method: 'POST',
			body: JSON.stringify({
				project_name, 
				project_description}),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			document.location.replace('/allprojects');
		} else {
			alert('Failed to create project');
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
	.querySelector('.newProjectForm')
	.addEventListener('submit', newProjectHandler);

// document
// 	.querySelector('.projectList')
// 	.addEventListener('click', delButtonHandler);