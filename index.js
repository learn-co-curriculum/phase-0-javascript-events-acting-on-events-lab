function moveDodgerLeft() {
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            const leftNumbers = dodger.style.left.replace("px", "");
            const left = parseInt(leftNumbers, 10);

            dodger.style.left = `${left - 1}px`
        }
    })
}

function moveDodgerRight() {
    
}
