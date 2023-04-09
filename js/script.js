inputField = document.getElementById("inputField");
addBtn = document.getElementById("addBtn");
resizeOptions = document.getElementById("resizeOptions");

function addElements(numElements) {
  for (i = 0; i < numElements; i++) {
    newElement = document.createElement("div");
    newElement.innerHTML = `
    <input class="resizeUnit" type="number" value="${
      i + 1
    }">x<input class="resizeUnit" type="number" value="${i + 1}">`;
    resizeOptions.appendChild(newElement);
  }
}

addBtn.addEventListener("click", function () {
  numElements = parseInt(inputField.value);
  addElements(numElements);
});
