import organizationReducer, {
  resetOrganization,
  selectOrganization,
  initialState
} from './organizationSlice'

describe('Organization Reducer', () => {
  const state = initialState()
  const organization = 'github'

  it('should handle initial state', () => {
    expect(organizationReducer(undefined, { type: 'unknown' })).toEqual({
      list: [],
      selected: '',
      serviceStatus: 'idle',
      loadingStack: {},
      repositories: [],
      totalCount: 0
    })
  })

  it('should handle select organization', () => {
    const actual = organizationReducer(state, selectOrganization(organization))
    expect(actual.selected).toEqual(organization)
    expect(actual.list.length).toEqual(0)
  })

  it('should handle reset organization', () => {
    const actual = organizationReducer(state, resetOrganization())
    expect(actual.list.length).toEqual(0)
  })

})
