function removeRedundantMediaQueryWrapper (atRule, root) {
  // wanted to use `atRule.replaceWith(atRule.nodes)` but it preserved
  // indentation that failed unit tests
  root.insertAfter(atRule, atRule.nodes)
  atRule.remove()
}

module.exports = removeRedundantMediaQueryWrapper
