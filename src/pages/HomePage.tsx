import React, { useState } from 'react'

import { OrdinaryPage } from '@/components/OrdinaryPage'
import { PostList } from '@/components/PostList'
export const HomePage: React.FC = () => {
  const [posts, setPosts] = useState([])

  const removePost = (e: React.SyntheticEvent, id: string) => {
    console.log('removePost', e, id)
    return
  }
  return (
    <OrdinaryPage>
      <h1>HomePage</h1>
      <PostList posts={posts} handleRemove={removePost} />
    </OrdinaryPage>
  )
}
