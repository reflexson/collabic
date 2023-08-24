const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#userNameSignup').value.trim();
  const password = document.querySelector('#passwordSignup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
.querySelector('.signupForm')
.addEventListener('submit', signupFormHandler);