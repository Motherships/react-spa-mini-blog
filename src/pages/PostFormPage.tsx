import { nanoid } from 'nanoid'
import React from 'react'

import { OrdinaryPage } from '@/components/OrdinaryPage'
import { PostForm } from '@/components/PostForm'
import { Post } from '@/types'
export const PostFormPage: React.FC = () => {
  const addPost = (title: string, content: string) => {
    const post: Post = {
      id: nanoid(),
      title,
      content,
    }
    console.log('addPost', post)
    return
  }
  return (
    <OrdinaryPage>
      <h1>Add post</h1>
      <PostForm handleSubmit={addPost} />
    </OrdinaryPage>
  )
}
