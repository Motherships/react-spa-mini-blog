import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { OrdinaryPage } from '@/components/OrdinaryPage'
import { SinglePost } from '@/components/SinglePost'
import { Paths } from '@/routes'
import { Post } from '@/types'

export const PostPage: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null)
  const { id } = useParams<'id'>()
  const navigate = useNavigate()

  useEffect(() => {
    const post = (
      JSON.parse(localStorage.getItem('posts') || '[]') as Post[]
    ).find((post) => post.id == id) as Post
    setPost(post)
  }, [id])

  const removePost = (id: string) => {
    const posts = (
      JSON.parse(localStorage.getItem('posts') || '[]') as Post[]
    ).filter((post) => post.id != id)
    localStorage.setItem('posts', JSON.stringify(posts))
    console.log('removePost', id)
    navigate(Paths.PostListPage)
  }
  return (
    <OrdinaryPage>
      {post && (
        <>
          <SinglePost id={post.id} title={post.title} content={post.content} />
          <button
            className="button is-danger"
            onClick={() => {
              removePost(post.id)
            }}
          >
            Delete
          </button>
        </>
      )}
    </OrdinaryPage>
  )
}
