// Your code here
const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  dodger.style.left = `${left - 8}px`;
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  dodger.style.left = `${left + 8}px`;
}

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
