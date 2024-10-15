const myBtn = document.getElementById("myButton");
const result = document.querySelector(".result");
myBtn.addEventListener("click", () => {
  result.textContent = "You clicked the button.";
});
