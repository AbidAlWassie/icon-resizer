inputField = document.getElementById("inputField");
addBtn = document.getElementById("addBtn");
resizeOptions = document.getElementById("resizeOptions");

addBtn.addEventListener("click", function () {
  numElements = parseInt(inputField.value);
  addElements(numElements);
});

function addElements(numElements) {
  for (i = 0; i < numElements; i++) {
    newElement = document.createElement("div");
    newElement.innerHTML = `
    <input class="resizeUnit resizer__input resizer__input--width" type="number" placeholder="${
      i + 1
    }">x<input class="resizeUnit resizer__input resizer__input--width" type="number" placeholder="${
      i + 1
    }">`;
    resizeOptions.appendChild(newElement);
  }
}
