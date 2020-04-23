let outputField = document.getElementsByClassName("my-articles");

inputField.addEventListener("keyup", function () {
  for (item of outputField) {
    item.textContent = event.target.value;
    // console.log(item);
  }
});
