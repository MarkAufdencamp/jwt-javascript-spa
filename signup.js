// JavaScript Document
const signupForm = document.getElementById("signup-form");
const message = document.getElementById('message');

signupForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const passwordConfirmation = document.getElementById('passwordConfirmation').value;

  if (password !== passwordConfirmation) {
    message.style.color = 'red';
    message.textContent = 'Passwords do not match.';
    return;
  }

  const apiBaseUrl = window.CONFIG?.API_BASE_URL || 'http://localhost:3000';

  try {
    const res = await fetch(`${apiBaseUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        user: {
          username, 
          password, 
          password_confirmation: passwordConfirmation 
        }
      })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Signup failed.');
    }

    message.style.color = 'green';
    message.textContent = 'Signup successful! Redirecting to login...';
    
    setTimeout(() => {
      window.open("index.html", "_self");
    }, 2000);
    
  } catch (error) {
    message.style.color = 'red';
    message.textContent = error.message;
  }
});
