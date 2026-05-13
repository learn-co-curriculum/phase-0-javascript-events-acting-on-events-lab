function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
//    const rightNumbers = document.getElementById('dodger')
   
    // const dodger = document.getElementById('dodger')

    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left + 1}px`;


    //const rightNumbers = right + 'px';
    //const right = parseInt(rightNumbers, );

   // if (right > 0) {
    //    dodger.style.right = `${left + 1}px`;
   // }
//}
document.addEventListener("keyup", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
})