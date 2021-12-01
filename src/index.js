import React from 'react'
import { render } from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import App from './containers/App'
import { ToastContainer } from 'react-toastify';
import "@fontsource/roboto"
import './index.css'
import 'react-toastify/dist/ReactToastify.css';


render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)