document.getElementById("check-btn").addEventListener("click", checkValidation);
document.getElementById("clear-btn").addEventListener("click", clearResults);

function checkValidation() {
  let inputField = document.getElementById("user-input").value.trim();
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;

  if (inputField === "") {
    alert("Please provide a phone number");
  } else if (regex.test(inputField)) {
    document.getElementById("results-div").textContent =
      "Valid US number: " + inputField;
    document.getElementById("results-div").style.color = "blue";
  } else {
    document.getElementById("results-div").textContent =
      "Invalid US number: " + inputField;
    document.getElementById("results-div").style.color = "red";
  }
}

function clearResults() {
  document.getElementById("results-div").textContent = "";
}
