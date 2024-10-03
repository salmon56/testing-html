function validateForm() {
  e.preventDrfault(); //prevents form submission for validation
  let valid = true;

  // Clear error messages
  document.getElementById('name_error').innerHTML = '';
  document.getElementById('email_error').innerHTML = '';
  document.getElementById('password_error').innerHTML = '';
  document.getElementById('age_error').innerHTML = '';
  document.getElementById('confirm_error').innerHTML = '';

  // Validate name
  let name = document.getElementById('name').value;
  if (name === "") {
    document.getElementById('name_error').innerHTML = 'Name is required.';
    valid = false;
  }

  // Validate email
  let email = document.getElementById('email').value;
  if (email === "") {
    document.getElementById('email_error').innerHTML = 'Email is required.';
    valid = false;
  }

  // Validate password
  let password = document.getElementById('password').value;
  if (password === "") {
    document.getElementById('password_error').innerHTML = 'Password is required.';
    valid = false;
  } else if (password.length < 6) {
    document.getElementById('password_error').innerHTML = 'Password must be at least 6 characters long.';
    valid = false;
  }

  // Validate confirm password
  let confirmPassword = document.getElementById('confirmPassword').value;
  if (confirmPassword === "") {
    document.getElementById('confirm_error').innerHTML = 'Please confirm your password.';
    valid = false;
  } else if (confirmPassword !== password) {
    document.getElementById('confirmPassword_error').innerHTML = "Passwords don't match.";
    valid = false;
  }

  // Validate age
  let age = document.getElementById('age').value;
  if (age === "") {
    document.getElementById('age_error').innerHTML = 'Age is required.';
    valid = false;
  } else if (isNaN(age) || age < 18) {
    document.getElementById('age_error').innerHTML = 'Age must be a number greater than or equal to 18.';
    valid = false;
  }
    // If valid is true, allow the form to submit
    if (valid) {
      // here we want to reset the formonce its submitted
      document.getElementById('registrationform').reset();
      // you could redirect or display a success message
      alert('Form submitted successfully!'); // Example of what to do if valid
    }

  return valid;
}