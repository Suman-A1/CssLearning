function validations() {
  let firstname = document.getElementById("fname");
  if (firstname.value.length >= 4) {
    firstname.setCustomValidity("");
  } else {
    firstname.setCustomValidity("Name must have at least 4 characters!");
  }
  let lastname = document.getElementById("lname");
  if (lastname.value.length >= 4) {
    lastname.setCustomValidity("");
  } else {
    lastname.setCustomValidity("Name must have at least 4 characters!");
  }

  let age = document.getElementById("age");
  if (age.value >= 18) {
    age.setCustomValidity("");
  } else {
    age.setCustomValidity("You must be 18 or above.");
  }
  let dateInput = document.getElementById("date");
  let enteredDate = dateInput.value;
  if (!enteredDate) {
    dateInput.setCustomValidity("Please select a date.");
  } else {
    // Additional validation logic for date input can be added here
    dateInput.setCustomValidity("");
  }
  let genderInput = document.getElementById("gender");
  let enteredValue = genderInput.value;
  if (!enteredValue) {
    genderInput.setCustomValidity("Please select a gender.");
  } else {
    genderInput.setCustomValidity("");
  }

  let phone = document.getElementById("phone");
  if (phone.checkValidity()) {
    phone.setCustomValidity("");
  } else {
    phone.setCustomValidity("Enter a valid phone number");
  }

  let emailInput = document.getElementById("email");
  if (emailInput.value.includes("@")) {
    emailInput.setCustomValidity("");
  } else {
    emailInput.setCustomValidity("Enter a valid email address");
  }
}

function validateForm() {
  let isValidEducation = validateRadioButtons("education");
  let isValidType = validateRadioButtons("type");

  if (!isValidEducation) {
    alert("Please select your education.");
    return false;
  }

  if (!isValidType) {
    alert("Please select your application type.");
    return false;
  }

  return true;
}

function validateRadioButtons(groupName) {
  let radios = document.getElementsByName(groupName);
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return true;
    }
  }
  return false;
}

function validatePassword() {
  let passwordset = document.getElementById("password");

  if (passwordset.value.length < 5 || !/[!@#$]/.test(passwordset.value)) {
    passwordset.setCustomValidity(
      "Password must have at least 5 characters including special characters like @, $, !, or #"
    );
    return false;
  } else {
    passwordset.setCustomValidity("");
    return true;
  }
}

const checkboxes = document.querySelectorAll(
  '.interest-items input[type="checkbox"]'
);

function validateInterest() {
  let isChecked = false;
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      isChecked = true;
    }
  });

  if (!isChecked) {
    alert("Please select at least one interest.");
    return false;
  }

  return true;
}
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", validateInterest);
});

// function validateForm() {
//   const isValid = validations();
//   if (isValid) {
//     window.location.href = "formpage2.html";
//   } else {
//     alert("Form must be filled correctly!");
//   }
// }

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
