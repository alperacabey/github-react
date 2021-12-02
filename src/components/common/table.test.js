import { shallow, findByTestAttr, listMaker } from "../../testUtils"
import { Table } from '.'

const setup = (props = {}) => {
  return shallow(
    <Table {...props} />
  )
}

const list = listMaker(5)

const columns = {
  id: "ID",
  name: "NAME",
}

describe("Table Component", () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = setup()
  })

  it('renders without crashing', () => {
    expect(findByTestAttr(wrapper, "table-component").exists()).toBe(true)
  })

  it('renders label colums correctly', () => {
    wrapper = setup({ columns })
    expect(findByTestAttr(wrapper, 'table-header').length).toBe(Object.keys(columns).length)
  })

  it('renders not found message if list is empty', () => {
    expect(wrapper.text()).toBe('No results')
  })

  it('renders list items correctly', () => {
    wrapper = setup({ list, columns })
    expect(findByTestAttr(wrapper, 'table-item').length).toBe(list.length * Object.keys(columns).length)
  })

  // it('type a text correctly', () => {
  //   const sort = jest.fn()
  //   wrapper = setup({ list, columns, sort })
  //   const input = findByTestAttr(wrapper, "textfield-input")
  //   input.simulate('focus')
  //   input.simulate('change', { target: { value: 'test' } })
  //   input.simulate('change', { target: { value: 'test-text' } })
  //   expect(onChange).toHaveBeenCalledTimes(2)
  // })
})