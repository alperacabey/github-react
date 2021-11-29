import organizationReducer from './organizationSlice'
import { configureStore } from '@reduxjs/toolkit'

// import { isRejectedWithValue } from '@reduxjs/toolkit'
/**
 * Log a warning and show a toast!
 */
// export const rtkQueryErrorLogger = (store) => (next) => (action) => {
//   // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these use matchers!
//   if (isRejectedWithValue(action)) {
//     console.warn('We got a rejected action!')
//   }

//   return next(action)
// }

export default configureStore({
  reducer: {
    organization: organizationReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkQueryErrorLogger),
})