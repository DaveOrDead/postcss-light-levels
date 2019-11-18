function prefixWithSpace (prefix) {
  return /\s+$/.test(prefix) ? prefix : `${ prefix } `
}

module.exports = prefixWithSpace
