import { configureStore } from '@reduxjs/toolkit'

import { postsMiddleware, reHydrateStore } from '@/store/posts/middleware'
import postsReducer from '@/store/posts/reducer'

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsMiddleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
