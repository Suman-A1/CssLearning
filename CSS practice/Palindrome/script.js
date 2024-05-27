let stre = prompt("Enter string");

let rev = "";
for (let i = stre.length - 1; i >= 0; i--) {
  rev += stre[i];
}

if (stre === rev) {
  alert("It is a palindrome");
} else {
  alert("It is not a palindrome");
}

// let inputField = document.getElementById("text-input");
// let checkButton = document.getElementById("check-btn");
// let resultD = document.getElementById("result");

// checkButton.addEventListener("click", error);

// function error() {
//   let inputString = inputField.value.trim();
//   let stre = inputField.value.toLowerCase();
//   let reverseStre = stre.split("").reverse().join("");

//   if (stre === "") {
//     alert("Please enter a String");
//   } else if (stre === reverseStre) {
//     resultD.textContent = `${inputString} is Palindrome `;
//   } else {
//     resultD.textContent = ` ${inputString} is not a palindrome `;
//   }
// }
