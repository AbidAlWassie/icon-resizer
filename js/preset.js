window.onload = function () {
  loadJsonData();
};

var inputField = document.getElementById("inputField");
var addBtn = document.getElementById("addBtn");
var resizeOptions = document.getElementById("resizeOptions");

const iconsSelect = document.getElementById("icons");

iconsSelect.addEventListener("change", loadJsonData);

function loadJsonData() {
  const selectedValue = iconsSelect.value;
  const fileName = `${selectedValue}.json`;

  if (!resizeOptions.innerHTML.trim() === "") {
    console.log("empty");
    resizeOptions.innerHTML = "";
  } else {
    resizeOptions.innerHTML = "";
    console.log("not empty");
  }

  fetch(`json/${fileName}`)
    .then((response) => response.json())
    .then((data) => {
      const counter = data.sizes.length;
      console.log(`Number of objects: ${counter}`);

      for (i = 0; i < counter; i++) {
        const obj = data.sizes[i];
        const newInput = document.createElement("div");
        newInput.className = "resizeUnits";

        newInput.innerHTML = `
        <input class="resizeUnit width" type="number" placeholder="${
          i + 1
        }" value=${
          obj.width
        }>x<input class="resizeUnit height" type="number" placeholder="${
          i + 1
        }" value=${obj.height}>`;

        console.log(`${i}: ${obj.name}, ${obj.width}, ${obj.height}`);
        resizeOptions.appendChild(newInput);
      }
    })
    .catch((error) => {
      console.error(`Error loading ${fileName}:`, error);
    });
}

addBtn.addEventListener("click", function () {
  times = parseInt(inputField.value);
  createSize(times);
});

function createSize(times) {
  for (i = 0; i < times; i++) {
    newElement = document.createElement("div");
    newElement.innerHTML = `
    <input class="resizeUnit width" type="number" placeholder="${
      i + 1
    }">x<input class="resizeUnit height" type="number" placeholder="${i + 1}">`;
    resizeOptions.appendChild(newElement);
  }
}
