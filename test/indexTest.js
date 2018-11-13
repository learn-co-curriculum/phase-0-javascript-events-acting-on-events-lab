describe('index', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
  })
  it('runs', () => {
    expect(true).toBe.true
  })
})