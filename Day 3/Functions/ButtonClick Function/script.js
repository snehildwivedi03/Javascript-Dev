const myBtn = document.getElementById("myButton");
const result = document.querySelector(".result");
let isClicked = false;

myBtn,
  addEventListener("click", () => {
    if (isClicked) {
      result.textContent = "";
      isClicked = false;
      console.log("no");
    } else {
      result.textContent = "You Clicked the Button!";
      isClicked = true;
      console.log("YEs");
    }
  });
console.log(this);
