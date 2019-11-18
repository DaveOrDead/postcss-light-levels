let getMediaQueryFunction = require('./../lib/get-media-query-function')

describe('Utility - getMediaQueryFunction', () => {
  it('Should return a function', () => {
    expect(typeof getMediaQueryFunction('screen')
    ).toBe('function')
  })
})
