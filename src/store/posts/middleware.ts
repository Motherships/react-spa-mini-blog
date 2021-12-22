import { Middleware } from 'redux'

import { postsSlice } from '@/store/posts/reducer'
export const postsMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action)
  if (
    postsSlice.actions.postAdded.match(action) ||
    postsSlice.actions.postRemoved.match(action)
  ) {
    const state = store.getState()
    localStorage.setItem('posts', JSON.stringify(state.posts))
  }

  return result
}

export const reHydrateStore = () => {
  if (localStorage.getItem('posts') !== null) {
    return { posts: JSON.parse(localStorage.getItem('posts') || '[]') }
  }
}
