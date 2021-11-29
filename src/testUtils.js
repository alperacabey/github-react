
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Enzyme, { configure, shallow, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import organizationReducer from './store/organizationSlice'

configure({ adapter: new Adapter() })

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

const listMaker = (n = 10) => {
    const list = [];
    for (let i = 0; i < n; i++) {
        list.push({
            id: i,
            name: `List item ${i}`,
        })
    }
    return list
}

const store = configureStore({ reducer: { user: organizationReducer } })

const render = (
    ui,
    {
        preloadedState,
        store,
        ...renderOptions
    } = {}
) => {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'

export { shallow, render, mount, findByTestAttr, listMaker, store , Provider}

export default Enzyme
