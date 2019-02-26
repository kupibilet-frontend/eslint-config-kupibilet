const { CLIEngine } = require('eslint')

const cli = new CLIEngine({ ignore: false })

const invalidFlowTypeDefinition = `
/* eslint-disable no-console */
// @flow
type Author = {
  name: string,
  age:number
}

const author: Author = {
  name: 'Vova',
  age: 20,
}

console.log(author)
`

const validFlowTypeDefinition = `
/* eslint-disable no-console */
// @flow
type Author = {
  name: string,
  age: number,
}

const author: Author = {
  name: 'Vova',
  age: 20,
}

console.log(author)
`

const snippetWithoutFlow = `
/* eslint-disable no-console */
const a = 1
console.log(a)
`

const fileWithUncoveredByFlowCode = `
/* eslint-disable no-console */
const a: number = 1
const b = 2

console.log(a, b)
`

test('Lints invalid flow type', () => {
  const { results } = cli.executeOnText(invalidFlowTypeDefinition)
  expect(results[0].messages).toHaveLength(1)
})

test('Flow does not throw errors if there are no errors', () => {
  const { results } = cli.executeOnText(validFlowTypeDefinition)
  expect(results[0].messages).toHaveLength(0)
})

test('Files without flow are OK', () => {
  const { results } = cli.executeOnText(snippetWithoutFlow)
  expect(results[0].messages).toHaveLength(0)
})

test('Files with some uncovered by flow code are OK', () => {
  const { results } = cli.executeOnText(fileWithUncoveredByFlowCode)
  expect(results[0].messages).toHaveLength(0)
})
