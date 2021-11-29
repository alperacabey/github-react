import { mount, findByTestAttr, listMaker } from "../../testUtils"
import { AutoComplete } from '../common'

const setup = (props = {}) => {
  return mount(
    <AutoComplete {...props} />
  )
}

const list = listMaker(5)
const autocompleteList = (wrapper) => findByTestAttr(wrapper, "autocomplete-list")

describe("Autocopmlete Component", () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = setup()
  })

  it('renders without crashing', () => {
    expect(findByTestAttr(wrapper, "autocomplete-component").exists()).toBe(true)
  })

  it('renders input correctly', () => {
    expect(findByTestAttr(wrapper, "autocomplete-input").exists()).toBe(true)
  })

  it('should not renders list initially', () => {
    expect(autocompleteList(wrapper).exists()).toBe(false)
  })

  it('renders list after data updated', () => {
    wrapper.setProps({ data: list })
    expect(autocompleteList(wrapper).exists()).toBe(true)
  })

  it('should not renders list when user select an item', () => {
    wrapper.setProps({ data: list })
    const item = findByTestAttr(wrapper, "autocomplete-list-item-1")
    item.simulate('click')
    expect(autocompleteList(wrapper).exists()).toBe(false)
  })

  it('should not renders list when user click an input', () => {
    wrapper.setProps({ data: list })
    const input = findByTestAttr(wrapper, "textfield-input")
    input.simulate('click')
    expect(autocompleteList(wrapper).exists()).toBe(false)
  })

  it('should not renders tooltip message initially', () => {
    expect(findByTestAttr(wrapper, "textfield-tooltip").exists()).toBe(false)
  })

  it('renders result not found message correctly', () => {
    wrapper.setProps({ data: [], value: "test" })
    expect(findByTestAttr(wrapper, "textfield-tooltip").exists()).toBe(true)
  })

  it('type a text correctly', () => {
    const onChange = jest.fn()
    wrapper.setProps({ onChange })
    const input = findByTestAttr(wrapper, "textfield-input")
    input.simulate('change', { target: { value: 'test-text' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('select an option correctly', () => {
    const onSelect = jest.fn()
    wrapper.setProps({ data: list, onSelect })
    const item = findByTestAttr(wrapper, "autocomplete-list-item-1")
    item.simulate('click')
    expect(onSelect).toHaveBeenCalledTimes(1)
  })

})