var registrations = JSON.parse(localStorage.getItem('registrations')) || [];


function validateForm(event) {
  event.preventDefault();

  var username = document.getElementById('username');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var confirmPassword = document.getElementById('confirmPassword');

  var usernameError = document.getElementById('usernameError');
  var emailError = document.getElementById('emailError');
  var passwordError = document.getElementById('passwordError');
  var confirmPasswordError = document.getElementById('confirmPasswordError');

  var errorMessages = [];

  var usernameRegex = /^[a-zA-Z0-9 _]{5,}$/;
  if (!usernameRegex.test(username.value)) {
    usernameError.innerHTML = '<span></span>Username must be at least 4 characters long and can only contain letters, numbers, and underscores.';
    username.classList.add('error');
  } else {
    usernameError.innerHTML = '';
    username.classList.remove('error');
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.innerHTML = '<span></span>Invalid email address.';
    email.classList.add('error');
  } else {
    emailError.innerHTML = '';
    email.classList.remove('error');
  }

  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  if (!passwordRegex.test(password.value)) {
    passwordError.innerHTML = '<span></span>Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
    password.classList.add('error');
  } else {
    passwordError.innerHTML = '';
    password.classList.remove('error');
  }

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.innerHTML = '<span></span>Passwords do not match.';
    confirmPassword.classList.add('error');
  } else {
    confirmPasswordError.innerHTML = '';
    confirmPassword.classList.remove('error');
  }

  if (username.classList.contains('error') || email.classList.contains('error') || password.classList.contains('error') || confirmPassword.classList.contains('error')) {
    return;
  }

  var registration = {
    username: username.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value
  };
  registrations.push(registration);
  localStorage.setItem('registrations', JSON.stringify(registrations));

  alert('Registration successful!');

  document.getElementById('registrationForm').reset();
}