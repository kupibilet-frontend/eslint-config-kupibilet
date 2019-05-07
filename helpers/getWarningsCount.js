const getWarningsCount = (messages) => messages.filter(({ severity }) => severity === 1).length

module.exports = getWarningsCount
