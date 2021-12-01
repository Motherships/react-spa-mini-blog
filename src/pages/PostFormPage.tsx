import { nanoid } from 'nanoid'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { OrdinaryPage } from '@/components/OrdinaryPage'
import { PostForm } from '@/components/PostForm'
import { Paths } from '@/routes'
import { Post } from '@/types'
export const PostFormPage: React.FC = () => {
  const navigate = useNavigate()

  const addPost = (title: string, content: string) => {
    const newPost: Post = {
      id: nanoid(),
      title,
      content,
    }
    localStorage.setItem(
      'posts',
      JSON.stringify([
        newPost,
        ...JSON.parse(localStorage.getItem('posts') || '[]'),
      ])
    )
    navigate(Paths.PostListPage + newPost.id, { replace: true })
  }
  return (
    <OrdinaryPage>
      <h1>Add post</h1>
      <PostForm handleSubmit={addPost} />
    </OrdinaryPage>
  )
}
