let prefixWithSpace = require('./../lib/prefix-with-space')

describe('utility - prefixWithSpace', () => {
  it('should return prefix with additional white space', () => {
    expect(prefixWithSpace('a')).toEqual(prefixWithSpace('a '))
  })
})
