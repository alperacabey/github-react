import { mount, findByTestAttr, Provider, store } from "../../testUtils"
import Container from './container'
import { selectOrganization } from "../../store/organizationSlice"

const setup = (props = {}) => {
  return mount(
    <Provider store={store}><Container {...props} /></Provider>
  )
}

describe("Container Component", () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = setup()
  })

  it('renders without crashing', () => {
    expect(findByTestAttr(wrapper, "container-component").exists()).toBe(true)
  })

})