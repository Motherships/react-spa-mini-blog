import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Post } from '@/types'

const initialState: Post[] = []
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: (state, action: PayloadAction<Post>) => {
      state.push(action.payload)
    },
    postRemoved: (state, action: PayloadAction<string>) => {
      return state.filter((post) => post.id !== action.payload)
    },
  },
})

export const { postAdded, postRemoved } = postsSlice.actions

export default postsSlice.reducer
