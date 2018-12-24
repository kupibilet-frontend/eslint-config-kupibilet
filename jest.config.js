// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: [
    // 'json',
    'text',
    'lcov',
    // 'clover',
  ],
  modulePathIgnorePatterns: [`npm-cache`, `.yarn-cache`, `.cache`],
  testMatch: ["**/tests/**/*.js?(x)"],
};
