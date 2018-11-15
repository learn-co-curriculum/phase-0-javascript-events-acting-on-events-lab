describe('Move', () => {
  afterEach(function() {
    expect.restoreSpies()
  })

  describe('moveDodgerLeft()', () => {
    beforeEach(() => {
      dodger = document.getElementById('dodger')
    })

    it('moves the DODGER to the left', () => {
      const left = positionToInteger(dodger.style.left)

      moveDodgerLeft()

      expect(positionToInteger(dodger.style.left)).toBeLessThan(left)
    })
  })

  describe('moveDodgerRight', () => {
    beforeEach(() => {
      dodger = document.getElementById('dodger')

      window.requestAnimationFrame = cb => {
        cb()
      }
    })

    it('moves the DODGER to the right', () => {
      const left = positionToInteger(dodger.style.left)

      moveDodgerRight()

      expect(positionToInteger(dodger.style.left)).toBeGreaterThan(left)
    })
  })
})
