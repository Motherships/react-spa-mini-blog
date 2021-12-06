import React from 'react'

import { OrdinaryPage } from '@/components/OrdinaryPage'
import { PostList } from '@/components/posts/PostList'
import { useAppSelector } from '@/hooks'
export const PostListPage: React.FC = () => {
  const posts = useAppSelector((state) => state.posts)

  return (
    <OrdinaryPage>
      <h1>Blog</h1>
      <PostList posts={posts} />
    </OrdinaryPage>
  )
}
