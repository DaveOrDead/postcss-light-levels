const removeRedundantMediaQueryWrapper =
 require('./remove-redundant-media-query-wrapper')
const prefixWithSpace = require('./prefix-with-space')

function createSelector (prefix, lightLevel) {
  let namespace = prefixWithSpace(`${ prefix }${ lightLevel }`)
  return s => `${ namespace }${ s }`
}

function addAnd (condition) {
  return condition ? 'and ' : ''
}

function addModifier (modifier) {
  return `${ modifier ? `${ modifier }-` : '' }`
}

function createQuery (param, idx) {
  /* eslint-disable max-len */
  return `${ addAnd(idx > 0) }(${ addModifier(param.modifier) }${ param.feature }: ${
    param.value
  })`
}
/* eslint-enable */

function applyLightLevel (atRule, props, root, prefix) {
  let generateSelector = createSelector(prefix, props.lightLevel)
  atRule.walkRules(rule => {
    rule.selectors = rule.selectors.map(generateSelector)
  })

  if (props.mediaType === 'screen' || props.params.length) {
    let screen = props.mediaType === 'screen' ? 'screen ' : ''

    let param = props.params.map(createQuery).join(' ')
    atRule.params = `${ screen }${ addAnd(screen && param) }${ param }`
  } else {
    removeRedundantMediaQueryWrapper(atRule, root)
  }
}

module.exports = applyLightLevel
