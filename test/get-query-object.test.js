let getQueryObject = require('./../lib/get-query-object')

describe('Utility - getQueryObject', () => {
  it(`Should return query inside "params" key unchanged if
  light-level feature not detected`, () => {
    let query = [
      { feature: 'a', value: 'b' },
      { feature: 'c', value: 'd' }
    ]
    expect(getQueryObject(query)).toEqual({ params: query })
  })

  it('Should split params and light level feature', () => {
    let query = [
      { feature: 'a', value: 'b' },
      { feature: 'light-level', value: 'dim' }
    ]
    expect(getQueryObject(query)).toEqual({
      lightLevel: 'dim',
      params: [{ feature: 'a', value: 'b' }]
    })
  })
})
