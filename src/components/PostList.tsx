import React from 'react'
import styled from 'styled-components'

import { PostCard } from '@/components/PostCard'
import { Post } from '@/types'

const OrderedList = styled.ol`
  && {
    margin-left: 0;
  }
`
const ListItem = styled.li`
  list-style: none;
`

type PostListProps = {
  posts: Post[]
  handleRemove: (e: React.SyntheticEvent, id: string) => void
}
export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <OrderedList>
      {posts.map(({ id, title, content }) => {
        return (
          <ListItem key={id}>
            <PostCard id={id} title={title} content={content} />
          </ListItem>
        )
      })}
    </OrderedList>
  )
}
