import organizationReducer from './organizationSlice'
// import repostoryReducer from './repostorySlice'

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    organization: organizationReducer,
    // repostory: repostoryReducer
  }
})