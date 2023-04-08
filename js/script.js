// Define the input field for user input
inputField = document.getElementById("inputField");

// Define the button for adding elements
addBtn = document.getElementById("addBtn");

// Define the container for added elements
resizeOptions = document.getElementById("resizeOptions");

// Define a function to handle adding elements to the container
function addElements(numElements) {
  // Loop through the specified number of elements
  for (i = 0; i < numElements; i++) {
    // Create a new element
    newElement = document.createElement("div");
    // Add content to the element
    newElement.innerHTML = `
    
    <input class="resizeUnit" type="number" value="${
      i + 1
    }">x<input class="resizeUnit" type="number" value="${i + 1}">`;
    // Append the new element to the container
    resizeOptions.appendChild(newElement);
  }
}

// Add a click event listener to the add button
addBtn.addEventListener("click", function () {
  // Get the value of the input field
  numElements = parseInt(inputField.value);
  // Call the function to add elements to the container
  addElements(numElements);
});
