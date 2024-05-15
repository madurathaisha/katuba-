
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
  
    // Basic validation
    if (email.trim() === '' || password.trim() === '') {
      document.getElementById('login-error-message').textContent = 'Please enter both email and password.';
    } else {
      // Here you can perform login authentication
      // For demonstration purposes, just show an alert
      alert('Login successful!');
    }
  });
  
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var firstName = document.getElementById('signup-firstname').value;
    var lastName = document.getElementById('signup-lastname').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
  
    // Basic validation
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
      document.getElementById('signup-error-message').textContent = 'Please fill out all fields.';
    } else {
      // Here you can perform sign-up process
      // For demonstration purposes, just show an alert
      alert('Sign up successful!');
    }
  });
  
  