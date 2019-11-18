function getQueryObject (query) {
  return query.reduce(
    (acc, expr) => {
      if (expr.feature === 'light-level') {
        acc.lightLevel = expr.value
      } else {
        acc.params.push(Object.assign({}, expr))
      }
      return acc
    },
    { params: [] }
  )
}

module.exports = getQueryObject
