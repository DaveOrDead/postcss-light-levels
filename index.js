const postcss = require('postcss')

const getLightLevelAndParams = require('./lib/get-light-level-and-params')
const getMediaQueryFunction = require('./lib/get-media-query-function')

module.exports = postcss.plugin('postcss-light-levels', options => {
  /* eslint-disable-next-line */
  let prefix = (options && options.prefix) || ".light-levels-";

  if (typeof prefix !== 'string') {
    throw new Error('prefix option must be a string')
  }

  return root => {
    root.walkAtRules('media', atRule => {
      // Don't bother parsing other media queries
      if (!atRule.params.includes('light-level')) return

      let obj = getLightLevelAndParams(atRule)

      if (obj.mediaType) {
        getMediaQueryFunction(obj.mediaType)(atRule, obj, root, prefix)
      }
    })
    /* eslint-disable-next-line */
  };
})
