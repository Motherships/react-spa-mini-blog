import { nanoid } from 'nanoid'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { OrdinaryPage } from '@/components/OrdinaryPage'
import { PostForm } from '@/components/posts/PostForm'
import { useAppDispatch } from '@/hooks'
import { Paths } from '@/routes'
import { postAdded } from '@/store/posts/reducer'
import { Post } from '@/types'
export const PostFormPage: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const addPost = (title: string, content: string) => {
    const newPost: Post = {
      id: nanoid(),
      title: title,
      content: content,
    }
    dispatch(postAdded(newPost))
    navigate(Paths.PostListPage + newPost.id, { replace: true })
  }
  return (
    <OrdinaryPage>
      <h1>Add post</h1>
      <PostForm handleSubmit={addPost} />
    </OrdinaryPage>
  )
}
