const { CLIEngine } = require('eslint')

const cli = new CLIEngine({ ignore: false })

const validSnippet = `
/* eslint import/no-extraneous-dependencies: 0, no-console: 0 */
import get from 'lodash/get'

console.log(get)
`

const invalidSnippetWithDestructuring = `
/* eslint import/no-extraneous-dependencies: 0, no-console: 0 */
import { get } from 'lodash'

console.log(get)
`

const invalidSnippetWithImportingLodashObject = `
/* eslint import/no-extraneous-dependencies: 0, no-console: 0 */
import _ from 'lodash'

console.log(_)
`

test('Lints valid lodash import', () => {
  const { results } = cli.executeOnText(validSnippet)
  expect(results[0].messages).toHaveLength(0)
})

test('Throws error on invalid destructuring lodash import', () => {
  const { results } = cli.executeOnText(invalidSnippetWithDestructuring)
  expect(results[0].messages).toHaveLength(1)
})

test('Throws error when importing lodash object', () => {
  const { results } = cli.executeOnText(invalidSnippetWithImportingLodashObject)
  expect(results[0].messages).toHaveLength(1)
})
