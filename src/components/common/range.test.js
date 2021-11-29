import { shallow, findByTestAttr } from "../../testUtils"
import { Range } from '.'

const setup = (props = {}) => {
  return shallow(
    <Range {...props} />
  )
}

describe("Range Component", () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = setup()
  })

  it('renders without crashing', () => {
    expect(findByTestAttr(wrapper, "range-component").exists()).toBe(true)
  })

  it('should not renders label if does not exists', () => {
    expect(wrapper.text()).toBe('')
  })

  it('renders label correctly', () => {
    const text = 'label-text'
    wrapper = setup({ label: text })
    expect(wrapper.text()).toBe(text)
  })

  it('should not renders tooltip initially', () => {
    expect(findByTestAttr(wrapper, 'range-tooltip').exists()).toBe(false)
  })

  it('type min and max values correctly', () => {
    const onChange = jest.fn()
    wrapper.setProps({ onChange })
    const min = findByTestAttr(wrapper, "min-input")
    const max = findByTestAttr(wrapper, "max-input")
    min.simulate('change', { target: { value: 3 } })
    max.simulate('change', { target: { value: 13 } })
    expect(onChange).toHaveBeenCalledTimes(2)
  })
})