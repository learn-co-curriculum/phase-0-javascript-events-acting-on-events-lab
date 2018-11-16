describe('moveDodgerLeft()', () => {
  beforeEach(() => {
    dodger = document.getElementById('dodger')
  })

  it('moves the DODGER to the left', () => {
    var left = dodger.style.left
    left = parseInt(left)

    moveDodgerLeft()

    var newPosition = dodger.style.left
    newPosition = parseInt(newPosition)

    expect(newPosition).to.be.below(left)
  })
})

describe('moveDodgerRight', () => {
  beforeEach(() => {
    dodger = document.getElementById('dodger')
  })

  it('moves the DODGER to the right', () => {
    var left = dodger.style.left
    left = parseInt(left)

    moveDodgerRight()

    var newPosition = dodger.style.left
    newPosition = parseInt(newPosition)

    expect(newPosition).to.be.above(left)
  })
})
