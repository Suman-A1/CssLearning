// function formValidate() {
//   let firstname = document.forms["form-check"]["fname"].value;
//   if (firstname == "") {
//     alert("Name must be filled out");
//   } else {
//     return false;
//   }
// }
function SUBMIT() {
  let firstname = document.forms["form-check"]["fname"].value;
  if (firstname == "") {
    alert("Form must be filled!");
  } else {
    return false;
  }
}
