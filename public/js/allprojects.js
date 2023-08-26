const newFormHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('#blogTitle').value.trim();

	const description = document.querySelector('#blogDesc').value.trim();

	if (title && description) {
		const response = await fetch(`/api/blogs`, {
			method: 'POST',
			body: JSON.stringify({ title, description }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to create blog');
		}
	}
};

const delButtonHandler = async (event) => {
	if (event.target.hasAttribute('data-id')) {
		const id = event.target.getAttribute('data-id');

		const response = await fetch(`/api/blogs/${id}`, {
			method: 'DELETE',
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to delete blog');
		}
	}
};

document
	.querySelector('.newBlogForm')
	.addEventListener('submit', newFormHandler);

document
	.querySelector('.blogList')
	.addEventListener('click', delButtonHandler);