const commentFormHandler = async function (event) {
	event.preventDefault();

	const blog_id = document.querySelector('.newComment').dataset.blogid;

	const comment_description = document.querySelector('#commentDescription').value.trim();

	if (comment_description) {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				blog_id,
				comment_description,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		document.location.reload();
	}
};

document
	.querySelector('.newComment')
	.addEventListener('submit', commentFormHandler);