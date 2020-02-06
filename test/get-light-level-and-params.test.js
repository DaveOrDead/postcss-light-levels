let getLightLevelAndParams = require('./../lib/get-light-level-and-params')

describe('utility - getLightLevelAndParams', () => {
  it('should return false if "OR" statement is found', () => {
    expect(
      getLightLevelAndParams({
        params: '(min-width: 200px) and (max-width: 250px)'
      })
    ).toEqual(false)
  })

  it('should return false if no light-level param found', () => {
    expect(
      getLightLevelAndParams({
        params: '(min-width: 200px) and (max-width: 250px)'
      })
    ).toEqual(false)
  })
})
