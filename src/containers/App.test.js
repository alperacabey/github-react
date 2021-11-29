import { shallow, findByTestAttr } from "../testUtils"
import App from './App'

describe("App Container", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders without crashing', () => {
    expect(findByTestAttr(wrapper, "app-container").exists()).toBe(true)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders header correctly', () => {
    expect(findByTestAttr(wrapper, "header-component").exists()).toBe(true)
  })

  it('renders container correctly', () => {
    expect(findByTestAttr(wrapper, "container-component").exists()).toBe(true)
  })

})