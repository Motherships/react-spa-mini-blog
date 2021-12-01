import React, { useEffect, useState } from 'react'

import { OrdinaryPage } from '@/components/OrdinaryPage'
import { PostList } from '@/components/PostList'
import { Post } from '@/types'
export const PostListPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    const savedPosts = JSON.parse(
      localStorage.getItem('posts') || '[]'
    ) as Post[]
    setPosts(savedPosts)
  }, [])

  return (
    <OrdinaryPage>
      <h1>Blog</h1>
      <PostList posts={posts} />
    </OrdinaryPage>
  )
}
