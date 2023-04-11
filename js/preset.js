window.onload = function () {
  loadJsonData();
};

var inputField = document.getElementById("inputField");
var resizeOptions = document.getElementById("resizeOptions");
// var addBtn = document.getElementById("addBtn");

const iconsSelect = document.getElementById("icons");

iconsSelect.addEventListener("change", loadJsonData);

function loadJsonData() {
  const selectedValue = iconsSelect.value;
  const fileName = `${selectedValue}.json`;

  // load the default preset
  if (!resizeOptions.innerHTML.trim() === "") {
    resizeOptions.innerHTML = "";
  } else {
    resizeOptions.innerHTML = "";
  }

  // fetch data from the selected file
  fetch(`json/${fileName}`)
    .then((response) => response.json())
    .then((data) => {
      // check the number of items in the array
      const counter = data.sizes.length;
      console.log(`objects in json: ${counter}`);

      // create the items for the number of items in the array and also based on the data
      for (i = 0; i < counter; i++) {
        const obj = data.sizes[i];
        const newInput = document.createElement("div");
        newInput.className = "resizeUnits";

        newInput.innerHTML = `
        <!-- image as placeholder -->

        <img class="placeholderImg" src="assets/picture.png" alt="placeholder_image">

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

      const fileInput = document.querySelector(".resizerFile");

      fileInput.addEventListener("change", () => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          const placeholderImgs = document.querySelectorAll(".placeholderImg");
          for (let i = 0; i < placeholderImgs.length; i++) {
            placeholderImgs[i].src = reader.result;
          }
        });
        reader.readAsDataURL(fileInput.files[0]);
      });
    })
    .catch((error) => {
      console.error(`Error loading ${fileName}:`, error);
    });
}

function resizeAndDownload() {
  const placeholderImgs = document.querySelectorAll(".placeholderImg");
  const resizeUnits = document.querySelectorAll(".resizeUnits");

  for (let i = 0; i < placeholderImgs.length; i++) {
    const img = placeholderImgs[i];
    const resizeUnit = resizeUnits[i];
    const width = resizeUnit.querySelector(".width").value;
    const height = resizeUnit.querySelector(".height").value;

    // create a canvas element
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    // draw image on canvas
    ctx.drawImage(img, 0, 0, width, height);

    // convert canvas to data URL and download
    const downloadLink = document.createElement("a");
    downloadLink.download = `${width}x${height}.png`;
    downloadLink.href = canvas.toDataURL("image/png");
    downloadLink.click();
    console.log(`${width}x${height}`);
  }
}

// addBtn.addEventListener("click", function () {
//   times = parseInt(inputField.value);
//   createSize(times);
// });

// function createSize(times) {
//   for (i = 0; i < times; i++) {
//     newElement = document.createElement("div");
//     newElement.innerHTML = `
//     <input class="resizeUnit width" type="number" placeholder="${
//       i + 1
//     }">x<input class="resizeUnit height" type="number" placeholder="${i + 1}">`;
//     resizeOptions.appendChild(newElement);
//   }
// }
