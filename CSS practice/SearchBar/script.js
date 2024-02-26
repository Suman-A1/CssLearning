let timeoutId;

function search_bar() {
  timeoutId = setTimeout(() => {
    let input = document.getElementById("searchbar").value.trim().toLowerCase();
    let x = document.getElementsByClassName("courses");

    if (input === "") {
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
    } else {
      for (let i = 0; i < x.length; i++) {
        let courseName = x[i].innerHTML.toLowerCase();
        if (courseName.includes(input)) {
          x[i].style.display = "list-item";
        } else {
          x[i].style.display = "none";
        }
      }
    }
  }, 3000);
}
