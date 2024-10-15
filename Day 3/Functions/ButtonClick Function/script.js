const myButton = document.getElementById("myButton");
const resultDiv = document.getElementById("result");

myButton.addEventListener("click", () => {
  resultDiv.textContent = "You clicked the button!";
});
