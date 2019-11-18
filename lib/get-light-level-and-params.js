let parseMediaQuery = require('css-mq-parser')

let getQueryObject = require('./get-query-object')

function getLightLevelAndParams (atRule) {
  let ors = parseMediaQuery(atRule.params)

  // Ignore query if `OR` rules exist- not supporting `OR`s yet
  if (ors.length !== 1) {
    return false
  }

  // Only gets first `AND` block - not supporting `OR`s yet
  let ands = ors[0]

  if (ands.inverse) {
    return false
  }

  let res = getQueryObject(ands.expressions)

  /*eslint-disable */
  return res.lightLevel
    ? Object.assign({}, { mediaType: ands.type }, res)
    : false;
  /* eslint-enable */
}

module.exports = getLightLevelAndParams
