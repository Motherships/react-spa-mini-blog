import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { OrdinaryPage } from '@/components/OrdinaryPage'
import { SinglePost } from '@/components/SinglePost'
import { Post } from '@/types'

export const PostPage: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null)
  const { id } = useParams<'id'>()

  useEffect(() => {
    const post = (
      JSON.parse(localStorage.getItem('posts') || '[]') as Post[]
    ).find((post) => post.id == id) as Post
    setPost(post)
  }, [id])

  return (
    <OrdinaryPage>
      {post && (
        <SinglePost id={post.id} title={post.title} content={post.content} />
      )}
      <button className="button is-danger">Delete</button>
    </OrdinaryPage>
  )
}
