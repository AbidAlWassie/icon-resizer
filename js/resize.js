const fileInput = document.querySelector(".resizerImg");
const widthInput = document.querySelector(".resizeUnit.width");
const heightInput = document.querySelector(".resizeUnit.height");
const aspectToggle = document.querySelector(".keepAspect");
const canvas = document.querySelector(".resizeCanvas");
const canvasCtx = canvas.getContext("2d");

let activeImage, initialImageRatio;

fileInput.addEventListener("change", (e) => {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    openImage(reader.result);
  });

  reader.readAsDataURL(e.target.files[0]);
});

function openImage(imageSrc) {
  activeImage = new Image();

  activeImage.addEventListener("load", () => {
    initialImageRatio = activeImage.width / activeImage.height;

    resize(activeImage.width, activeImage.height);
  });

  activeImage.src = imageSrc;
}

widthInput.addEventListener("change", () => {
  // if (!activeImage) return;

  const heightValue = aspectToggle.checked
    ? widthInput.value / initialImageRatio
    : heightInput.value;

  resize(widthInput.value, heightValue);
});

heightInput.addEventListener("change", () => {
  // if (!activeImage) return;

  const widthValue = aspectToggle.checked
    ? heightInput.value * initialImageRatio
    : widthInput.value;

  resize(widthValue, heightInput.value);
});

function resize(width, height) {
  canvas.width = Math.floor(width);
  canvas.height = Math.floor(height);
  widthInput.value = Math.floor(width);
  heightInput.value = Math.floor(height);

  canvasCtx.drawImage(activeImage, 0, 0, Math.floor(width), Math.floor(height));
}
