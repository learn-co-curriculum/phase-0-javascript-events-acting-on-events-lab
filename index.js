function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
})

function moveDodgerRight() {
    
}
