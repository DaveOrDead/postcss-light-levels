let prefixWithSpace = require('./../lib/prefix-with-space')

describe('Utility - prefixWithSpace', () => {
  it('Should return prefix with additional white space', () => {
    expect(prefixWithSpace('a')).toEqual(prefixWithSpace('a '))
  })
})
