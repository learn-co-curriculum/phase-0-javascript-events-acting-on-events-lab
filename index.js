const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4"
dodger.style.bottom = "0px"
dodger.style.left = "0px"
let count = 0



document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight()
  } else if (e.key === "ArrowDown") {
    moveDodgerDown()
  } else if (e.key === "ArrowUp") {
    moveDodgerUp()
  } else {
    if (count < 3) {
      console.log(`I don't think you're allowed to do that...`)
    } else if (count < 5) {
      console.log(`You sure about that? You sure about that, that's why?`)
    } else {
      console.log(`I don't want to be around anymore.`)
    }
    count++
  }
});



const moveDodgerLeft = () => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

const moveDodgerRight = () => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

const moveDodgerDown = () => {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
  }
}

const moveDodgerUp = () => {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 1}px`;
  }
}
