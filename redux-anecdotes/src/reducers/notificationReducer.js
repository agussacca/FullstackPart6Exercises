import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotificationAction(state, action){
      return action.payload
    },
    clearNotification(state, action){
      return ''
    },
  },
})

export const setNotification = (message, time) => {
  return async dispatch => {
    dispatch(setNotificationAction(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, time * 1000)
  }
}

export const { setNotificationAction, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer