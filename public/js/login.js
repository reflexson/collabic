const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#userNameLogin').value.trim();
  const password = document.querySelector('#passwordLogin').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
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
  .querySelector('.loginForm')
  .addEventListener('submit', loginFormHandler);


