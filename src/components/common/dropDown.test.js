import { shallow, findByTestAttr, listMaker } from "../../testUtils"
import { DropDown } from '.'

const setup = (props = {}) => {
  return shallow(
    <DropDown {...props} />
  )
}
const list = listMaker(5)
const dropdownList = (wrapper) => findByTestAttr(wrapper, "dropdown-list")

describe("Dropdown Component", () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = setup()
  })

  it('renders without crashing', () => {
    expect(findByTestAttr(wrapper, "dropdown-component").exists()).toBe(true)
  })

  it('renders "Select an option" if dropdown does not select', () => {
    expect(wrapper.text()).toBe('Select an option')
  })

  it('renders initial value correctly', () => {
    wrapper.setProps({ value: list[0], options: list })
    expect(wrapper.text()).toBe(list[0].name)
  })

  it('should not renders list initially', () => {
    wrapper.setProps({ value: list[0], options: list })
    expect(dropdownList(wrapper).exists()).toBe(false)
  })

  it('renders list when user click dropdown button', () => {
    findByTestAttr(wrapper, "dropdown-component").simulate('click')
    expect(dropdownList(wrapper).exists()).toBe(true)
  })

  it('select an option correctly', () => {
    const onChange = jest.fn()
    wrapper.setProps({ value: list[0], options: list, onChange })
    findByTestAttr(wrapper, "dropdown-component").simulate('click')
    expect(dropdownList(wrapper).exists()).toBe(true)
    findByTestAttr(wrapper, "dropdown-list-item-3").simulate('click')
    expect(onChange).toBeCalledWith(list[3])
  })
})