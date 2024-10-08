// Function to calculate age category
function calculateAgeCategory() {
  const age = document.getElementById("ageInput").value;
  let category = "";

  if (age === "" || age < 0) {
    category = "Please enter a valid age.";
  } else if (age <= 12) {
    category = "Child";
  } else if (age <= 19) {
    category = "Teenager";
  } else if (age <= 35) {
    category = "Young Adult";
  } else if (age <= 59) {
    category = "Adult";
  } else {
    category = "Senior Citizen";
  }

  document.getElementById(
    "ageCategory"
  ).textContent = `You fall under: ${category}`;
}

// Add event listener for button click
document
  .getElementById("submitBtn")
  .addEventListener("click", calculateAgeCategory);

// Add event listener for "Enter" key press
document
  .getElementById("ageInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // Check if the pressed key is Enter
      calculateAgeCategory(); // Trigger the same function as the button click
    }
  });
