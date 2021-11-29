import { shallow, findByTestAttr } from "../../testUtils"
import { TextField } from '.'

const setup = (props = {}) => {
  return shallow(
    <TextField {...props} />
  )
}

describe("TextField Component", () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = setup()
  })

  it('renders without crashing', () => {
    expect(findByTestAttr(wrapper, "textfield-input").exists()).toBe(true)
  })

  it('should not renders label if does not exists', () => {
    expect(wrapper.text()).toBe('')
  })

  it('renders label correctly', () => {
    const text = 'label-text'
    wrapper = setup({ label: text })
    expect(wrapper.text()).toBe(text)
  })

  it('renders tooltip message correctly', () => {
    expect(findByTestAttr(wrapper, 'textfield-tooltip').exists()).toBe(false)
    wrapper = setup({ showTooltip: true })
    expect(findByTestAttr(wrapper, 'textfield-tooltip').exists()).toBe(true)
  })

  it('renders loader spinner correctly', () => {
    expect(findByTestAttr(wrapper, 'textfield-loader').exists()).toBe(false)
    wrapper = setup({ loading: true })
    expect(findByTestAttr(wrapper, 'textfield-loader').exists()).toBe(true)
  })

  it('type a text correctly', () => {
    const onChange = jest.fn()
    wrapper.setProps({ onChange })
    const input = findByTestAttr(wrapper, "textfield-input")
    input.simulate('focus')
    input.simulate('change', { target: { value: 'test' } })
    input.simulate('change', { target: { value: 'test-text' } })
    expect(onChange).toHaveBeenCalledTimes(2)
  })
})