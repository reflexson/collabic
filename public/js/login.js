const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#userNameLogin').value.trim();
  const password = document.querySelector('#passwordLogin').value.trim();
  console.log(username);

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/allprojects');
    } else {
      alert("Bad User Name or Password");
    }
  }
};

document
  .querySelector('.loginForm')
  .addEventListener('submit', loginFormHandler);


