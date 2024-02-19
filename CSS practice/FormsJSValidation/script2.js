// script.js

// Function to validate the form
function validateForm() {
  // Get all input fields
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var address = document.getElementById("address").value;
  var date = document.getElementById("date").value;
  var education = document.querySelector('input[name="education"]:checked');
  var type = document.querySelector('input[name="type"]:checked');
  var experience = document.getElementById("experience").value;
  var development = document.getElementById("Development").checked;
  var business = document.getElementById("Business").checked;
  var designing = document.getElementById("Desiging").checked;
  var gaming = document.getElementById("gaming").checked;
  var message = document.getElementById("message").value;

  // Check if fields are empty
  if (
    fname == "" ||
    lname == "" ||
    age == "" ||
    gender == "" ||
    phone == "" ||
    email == "" ||
    password == "" ||
    address == "" ||
    date == "" ||
    !education ||
    !type ||
    experience == "" ||
    (!development && !business && !designing && !gaming) ||
    message == ""
  ) {
    alert("Please fill in all fields");
    return false;
  }

  // Validate phone number format
  var phoneRegex = /^\d{4}-\d{7}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number (e.g., XXXX-XXXXXXX)");
    return false;
  }

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Additional validations can be added as needed

  // If all validations pass, return true
  return true;
}
window.location.href = "formpage2.html";
return true;

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
