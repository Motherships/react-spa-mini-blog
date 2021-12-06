import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { OrdinaryPage } from '@/components/OrdinaryPage'
import { PostSingle } from '@/components/posts/PostSingle'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { Paths } from '@/routes'
import { postRemoved } from '@/store/posts/reducer'
export const PostPage: React.FC = () => {
  const { id } = useParams<'id'>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const post = useAppSelector((state) =>
    state.posts.find((post) => post.id == id)
  )

  useEffect(() => {
    if (!post) {
      navigate(Paths.NotFound)
    }
  }, [post])

  const removePost = (id: string) => {
    dispatch(postRemoved(id))
    navigate(Paths.PostListPage)
  }
  return (
    <OrdinaryPage>
      {post && (
        <>
          <PostSingle id={post.id} title={post.title} content={post.content} />
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
