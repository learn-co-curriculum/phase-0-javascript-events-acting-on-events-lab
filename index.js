//my events lab

const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "0px";

//dodger.style.left = "0px";

document.addEventListener("keydown", function (event) {//logs when a key is pressed
  console.log(event);
});

function moveDodgerLeft() {//moves the dodger left by 1px
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {//moves the dodger right by 1px
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function (e) {//moves the dodger left or right depending on the key pressed
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

