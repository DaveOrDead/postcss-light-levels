let getMediaQueryFunction = require('./../lib/get-media-query-function')

describe('utility - getMediaQueryFunction', () => {
  it('should return a function', () => {
    expect(typeof getMediaQueryFunction('screen')).toBe('function')
  })
})
