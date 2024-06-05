document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  var password = document.getElementById('password').value;

  if (password === '321') {
    // Password is correct, redirect to welcome.html
    window.location.href = 'index1.html';
  } else {
    // Password is incorrect, you can add an error message or handle as needed
    alert('Incorrect password. Please try again.');
  }
});