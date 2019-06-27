const getWarnings = (messages) => messages.filter(({ severity }) => severity === 1)

module.exports = getWarnings
