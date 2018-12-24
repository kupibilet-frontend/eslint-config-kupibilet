const { CLIEngine } = require('eslint')
const path = require('path')

const cli = new CLIEngine({ ignore: false })

const emptySnippet = `// Test\n`

test('ESLint should start with valid config', () => {
  const { results } = cli.executeOnText(emptySnippet)
  expect(results[0].messages).toHaveLength(0)
})

test('ESLint should validate his own config', () => {
  const { results } = cli.executeOnFiles([path.resolve(__dirname, '../.eslintrc.js')])
  expect(results[0].messages).toHaveLength(0)
})
