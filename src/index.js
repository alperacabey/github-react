import React from 'react'
import { render } from 'react-dom'
// import { createStore, applyMiddleware } from 'redux'
// import { createLogger } from 'redux-logger'
// import thunk from 'redux-thunk'

import store from './store'
import { Provider } from 'react-redux'
import App from './containers/App'
import reportWebVitals from './utils/reportWebVitals'
import "@fontsource/roboto"
import './index.css'
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const middleware = [thunk];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }

// const store = createStore(
//   reducer,
//   applyMiddleware(...middleware)
// )


render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)