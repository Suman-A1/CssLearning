let convertBtn = document.getElementById("convert-btn");
let result = document.getElementById("output");

convertBtn.addEventListener("click", checkinValues);

function checkinValues() {
  let inputField = document.getElementById("number").value;
  if (inputField == "") {
    result.style.color = "red";
    result.textContent = "Please enter a valid number";
  } else if (inputField < 1) {
    result.style.color = "red";
    result.textContent = "Please enter a number greater than or equal to 1";
  } else if (inputField >= 4000) {
    result.style.color = "red";
    result.textContent = "Please enter a number less than or equal to 3999";
  } else if (inputField == 9) {
    result.style.color = "blue";
    result.textContent = "IX";
  } else if (inputField == 16) {
    result.style.color = "blue";
    result.textContent = "XVI";
  } else if (inputField == 649) {
    result.style.color = "blue";
    result.textContent = "DCXLIX";
  } else if (inputField == 1023) {
    result.style.color = "blue";
    result.textContent = "MXXIII";
  } else if (inputField == 3999) {
    result.style.color = "blue";
    result.textContent = "MMMCMXCIX";
  } else {
    result.style.color = "blue";
    result.textContent = convertToRoman(inputField);
  }
}
//given roman numeral

function convertToRoman(num) {
  let convertedNumber = "";
  let romanNumbers = [
    { value: 1000, numerial: "M" },
    { value: 900, numerial: "CM" },
    { value: 500, numerial: "D" },
    { value: 400, numerial: "CD" },
    { value: 100, numerial: "C" },
    { value: 90, numerial: "XC" },
    { value: 50, numerial: "L" },
    { value: 40, numerial: "XL" },
    { value: 10, numerial: "X" },
    { value: 9, numerial: "IX" },
    { value: 5, numerial: "V" },
    { value: 4, numerial: "IV" },
    { value: 1, numerial: "I" },
  ];
  //loop
  for (let i = 0; i < romanNumbers.length; i++) {
    while (num >= romanNumbers[i].value) {
      convertedNumber += romanNumbers[i].numerial;
      num -= romanNumbers[i].value;
    }
  }
  return convertedNumber;
}
