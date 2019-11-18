const applyLightLevel = require('./apply-light-level')
const ignoreIrrelevantMediaQueryType =
  require('./ignore-irrelevant-media-query-type')

function getMediaQueryFunction (type = 'default') {
  let map = Object.freeze({
    all: applyLightLevel,
    screen: applyLightLevel,
    print: ignoreIrrelevantMediaQueryType,
    speech: ignoreIrrelevantMediaQueryType,
    default: () => {}, // Deprecated media type; take no action.
    undefined: () => {} // Media query irrelevant or too complicated
  })

  return map[type] || map.default
}

module.exports = getMediaQueryFunction
