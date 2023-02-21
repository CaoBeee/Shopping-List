var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(deleteButton);
  ul.appendChild(li);
  input.value = "";

  deleteButton.addEventListener("click", deleteListItem);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleDone(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
}

function deleteListItem(event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentNode.remove();
  }
}

ul.addEventListener("click", toggleDone);
ul.addEventListener("click", deleteListItem);

button.addEventListener("click", addListAfterClick);
