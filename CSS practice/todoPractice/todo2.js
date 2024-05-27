let input1 = document.getElementById("input");
let getResult = document.querySelector(".get");

function Add() {
  if (input1.value == "") {
    alert("Please Enter List...");
  } else {
    let newele = document.createElement("ul");
    newele.innerHTML = `${input1.value}`;
    getResult.appendChild(newele);
    input1.value = "";
  }
}
