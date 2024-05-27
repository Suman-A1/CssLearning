let inputField = document.getElementById("text-input");
let checkBtn = document.getElementById("check-btn");
let ResultD = document.getElementById("result");

checkBtn.addEventListener("click", validations);

function validations() {
  let valueTrim = inputField.value.trim();
  let stre = inputField.value.toLowerCase();
  let reverseStr = stre.split("").reverse().join("");

  if (stre === "") {
    alert("Please Enter a String");
  } else if (stre === reverseStr) {
    ResultD.textContent = `${valueTrim} is a Palindrome`;
  } else {
    ResultD.textContent = `${valueTrim} is not a Palindrmome`;
  }
}
