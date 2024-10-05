// Get the display element
const display = document.getElementById("display");
let resultDisplayed = false; // Flag to track if the result is displayed

// Function to clear the display
function clearDisplay() {
  display.value = "";
  resultDisplayed = false;
}

// Function to delete the last character from the display
function deleteLast() {
  display.value = display.value.slice(0, -1);
  resultDisplayed = false;
}

// Function to append a value to the display
function appendToDisplay(value) {
  // If the result is displayed and the user presses a number, clear the display
  if (resultDisplayed && !isNaN(value)) {
    clearDisplay();
  }

  // Append the value to the display
  display.value += value;
  resultDisplayed = false;
}

// Function to calculate the result based on the current input
function calculate() {
  try {
    // Evaluate the expression and display the result
    display.value = eval(display.value);
    resultDisplayed = true; // Set the flag to true after calculation
  } catch (error) {
    display.value = "Error"; // Display 'Error' if calculation fails
    resultDisplayed = false;
  }
}
