let inputs = document.getElementById("input");
let text = document.querySelector(".text");

function Add() {
  if (inputs.value == "") {
    alert("Please enter you task...");
  } else {
    let newElement = document.createElement("ul"); // creating an UL using createElement
    newElement.innerHTML = `${inputs.value}  <i class="fa-solid fa-trash"></i> <i class="fa-regular  fa-pen-to-square"></i>`;
    text.appendChild(newElement); //appendchild to send the value of newElement into text div
    inputs.value = "";
    newElement.querySelector("i").addEventListener("click", remove);
    newElement
      .querySelector(".fa-pen-to-square")
      .addEventListener("click", edit);
    function remove() {
      newElement.remove();
    }
    function edit() {
      let previous = newElement.firstChild.textContent;
      inputs.value = previous;
    }
  }
}
