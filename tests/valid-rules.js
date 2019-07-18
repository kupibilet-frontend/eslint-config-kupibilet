const { CLIEngine } = require('eslint')
const path = require('path')

const cli = new CLIEngine({ ignore: false })

const emptySnippet = `// Test\n`

const invalidLogicalOrPosition = `
/* eslint-disable no-console */
const tsoyLives = 1 > 0 ||
  (2 && 3)
  || (4 && 5)
console.log(tsoyLives)
`

const invalidComparisonOperatorPosition = `
/* eslint-disable no-console */
const array = [1, 2, 3, 4, 5]
const ovenArray = array.filter((item) => item ===
  2)
console.log(ovenArray)
`

test('ESLint should start with valid config', () => {
  const { results } = cli.executeOnText(emptySnippet)
  expect(results[0].messages).toHaveLength(0)
})

test('ESLint should validate his own config', () => {
  const { results } = cli.executeOnFiles([path.resolve(__dirname, '../.eslintrc.js')])
  expect(results[0].messages).toHaveLength(0)
})

describe('Eslint testing rule operator-linebreak', () => {
  test('warning if operators placing not at the beginning of the line ', () => {
    const { results } = cli.executeOnText(invalidLogicalOrPosition)
    expect(results[0].messages).toHaveLength(1)
  })

  test('warning if is a line break after strict equality operator', () => {
    const { results } = cli.executeOnText(invalidComparisonOperatorPosition)
    expect(results[0].messages).toHaveLength(1)
  })
})
