import React from 'react'

import { SinglePost } from '@/components/SinglePost'
import { Post } from '@/types'

type PostListProps = {
  posts: Post[]
  handleRemove: (e: React.SyntheticEvent, id: string) => void
}
export const PostList: React.FC<PostListProps> = ({ posts, handleRemove }) => {
  return (
    <ol>
      {posts.map(({ id, title, content }) => {
        return (
          <li key={id}>
            <SinglePost id={id} title={title} content={content} />
            <button
              className="button is-danger"
              onClick={(e) => handleRemove(e, id)}
            >
              Delete
            </button>
          </li>
        )
      })}
    </ol>
  )
}
