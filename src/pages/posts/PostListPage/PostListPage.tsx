import React from 'react'

import { OrdinaryPage } from '@/components/layout/OrdinaryPage/OrdinaryPage'
import { useAppSelector } from '@/hooks'
import { PostList } from '@/pages/posts/components/PostList/PostList'
export const PostListPage: React.FC = () => {
  const posts = useAppSelector((state) => state.posts)

  return (
    <OrdinaryPage>
      <h1>Blog</h1>
      <PostList posts={posts} />
    </OrdinaryPage>
  )
}
