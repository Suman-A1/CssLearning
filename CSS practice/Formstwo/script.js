var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}
// moving to previous
function nextPrev(n) {
  var x = document.getElementsByClassName("tab");

  if (n == 1 && !validateForm()) return false;

  x[currentTab].style.display = "none";

  currentTab = currentTab + n;

  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }

  showTab(currentTab);
}
// custom validation
function validateForm() {
  var x,
    y,
    z,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  z = x[currentTab].getElementsByTagName("select");
  let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  let textarea = x[currentTab].getElementsByTagName("textarea")[0];

  if (currentTab === 2) {
    var radioChecked = false;
    // Check if any radio button is checked
    for (var i = 0; i < y.length; i++) {
      if (y[i].type === "radio" && y[i].checked) {
        radioChecked = true;
        break;
      }
    }
    // If no radio button is checked, display alert
    if (!radioChecked) {
      alert("Please select an educational option.");
      valid = false;
    }
  }
  if (currentTab === 3) {
    // Check if textarea is empty
    if (textarea.value.trim() === "") {
      alert("Please write something about your Achievements.");
      valid = false;
    } else {
      // Check word count
      var wordCount = textarea.value.trim().split(/\s+/).length;
      if (wordCount > 50) {
        alert("Maximum 50 words allowed.");
        valid = false;
      }
    }
  }

  if (currentTab < x.length == 1) {
    for (i = 0; i < y.length; i++) {
      if (y[i].value == "") {
        alert("Form must be filled !");
        // y[i].className += " invalid";
        valid = false;
        break;
      } else if (y[i].name == "email") {
        if (!y[i].value.includes("@")) {
          alert("Enter a valid emial");
          valid = false;
        } else {
          true;
        }
      } else if (y[i].name == "password") {
        if (
          y[i].value.length < 8 ||
          !/[A-Z]/.test(y[i].value) ||
          !/[!@#$]/.test(y[i].value)
        ) {
          alert(
            "Password must be 8 digits having special characters like @ , #, !"
          );
          valid = false;
        } else {
          true;
        }
      } else if (y[i].name == "age") {
        if (y[i].value < 18) {
          alert("You must be 18 or above");
          valid = false;
        } else {
          true;
        }
      } else if (y[i].name == "number") {
        if (y[i].value.length !== 11) {
          alert("Number should be 11 digits");
          valid = false;
        } else {
          true;
        }
      }
    }
    let error = true;
    if (currentTab === 2) {
      checkBoxes.forEach((item) => {
        if (item.checked) {
          error = false;
        }
      });
      if (error) {
        alert("choose atleast one Interest!");
        valid = false;
      } else {
        true;
      }
    }

    if (valid) {
      document.getElementsByClassName("step")[currentTab].className +=
        " finish";
    }
    return valid;
  }

  function fixStepIndicator(n) {
    var i,
      x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }

    x[n].className += " active";
  }
}
//show password function----
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    button.textContent = "Hide Password";
    false;
  } else {
    passwordInput.type = "password";
    button.textContent = "Show Password";
    valid = true;
  }
}

// My practice code--------

// if (currentTab === 4) {
//   var checkboxes = x[currentTab].querySelectorAll('input[type="checkbox"]');
//   var checkboxChecked = false;
//   for (var i = 0; i < checkboxes.length; i++) {
//     if (checkboxes[i].checked) {
//       checkboxChecked = true;
//       break;
//     }
//   }
//   if (!checkboxChecked) {
//     alert("Please select at least one interest.");
//     valid = false;
//   }
// }
// if (currentTab === 4) {
//   for (var i = 0; i < checkboxes.length; i++) {
//     if (checkboxes[i].checked) {
//       checkboxChecked = true;
//       break;
//     }
//   }
//   if (!checkboxChecked) {
//     alert("Please select at least one interest.");
//     valid = false;
//   }
