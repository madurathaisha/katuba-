document.getElementById('login-signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Simple validation
    if (email && password) {
      // Here you can add further logic to determine if it's a login or sign up attempt
      // For simplicity, let's assume it's always a login attempt
      // Successful login, redirect or display success message
      alert('Log in successful!');
    } else {
      // Display error message
      document.getElementById('error-message').textContent = 'Please enter both email and password.';
    }
  });
  