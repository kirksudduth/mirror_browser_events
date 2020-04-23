let outputField = document.getElementsByClassName("my-articles");
let inputField = document.getElementById("message");
inputField.addEventListener("keyup", function () {
  for (item of outputField) {
    item.textContent = event.target.value;
    // console.log(item);
  }
});
