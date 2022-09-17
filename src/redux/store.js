import { configureStore } from '@reduxjs/toolkit'
import postSlice from './post/postSlice'
import userSlice from './user/userSlice'

export const store = configureStore({
  reducer: {
    posts: postSlice,
    users: userSlice
  },
})
