// import classNames from 'classnames'
import React from 'react'

import { PictureWithDescription } from '@/components/images/PictureWithDescription/PictureWithDescription'
import { Section } from '@/components/layout/Section/Section'
import { PostAuthorCard } from '@/pages/posts/components/PostAuthorCard/PostAuthorCard'
import { PostTextSection } from '@/pages/posts/components/PostTextSection/PostTextSection'
import { PostThumbnail } from '@/pages/posts/components/PostThumbnail/PostThumbnail'
import { OrderedList } from '@/styled/lists/OrderedList/OrderedList'
import { OrderedListItem } from '@/styled/lists/OrderedList/OrderedListItem'
import { UnorderedList } from '@/styled/lists/UnorderedList/UnorderedList'
import { UnorderedListItem } from '@/styled/lists/UnorderedList/UnorderedListItem'
import { Heading2 } from '@/styled/typography/Heading2'
import { MainSubtitle } from '@/styled/typography/MainSubtitle'
import { MainTitle } from '@/styled/typography/MainTitle'
import { Paragraph } from '@/styled/typography/Paragraph'
type DynamicBlock = {
  id: string
  type: string
  children?: Array<DynamicBlock> | string
  props?: object
}

type DynamicPost = {
  post: {
    id: string
    created: string
    timeToRead: string
    author: {
      id: string
      name: string
    }
    title: string
    content: Array<DynamicBlock>
  }
}

type AvailibleComponentsMap = {
  /*eslint-disable @typescript-eslint/no-explicit-any */
  [index: string]: React.FC<any>
}
const PostComponents: AvailibleComponentsMap = {
  PictureWithDescription: PictureWithDescription,
  Section: Section,
  UnorderedList: UnorderedList,
  UnorderedListItem: UnorderedListItem,
  OrderedList: OrderedList,
  OrderedListItem: OrderedListItem,
  Heading2: Heading2,
  MainSubtitle: MainSubtitle,
  MainTitle: MainTitle,
  Paragraph: Paragraph,
  PostAuthorCard: PostAuthorCard,
  PostTextSection: PostTextSection,
  PostThumbnail: PostThumbnail,
}

const jsonToComponent = (block: DynamicBlock): React.ReactElement => {
  // component does exist
  if (typeof PostComponents[block.type] !== 'undefined') {
    let children: React.ReactElement | React.ReactNode = ''
    if (block.children) {
      if (typeof block.children == 'string') {
        children = block.children
      } else {
        children = block.children.map((b) => jsonToComponent(b))
      }
    }
    return React.createElement(
      PostComponents[block.type],
      {
        key: block.id,
        ...(block.props ? block.props : null),
      },
      children
    )
  }

  // component doesn't exist yet
  return React.createElement(
    () => <div>The component {block.type} has not been created yet.</div>,
    { key: block.id }
  )
}
export const DynamicPostSingle: React.FC<DynamicPost> = ({ post }) => {
  return <>{post.content.map((block) => jsonToComponent(block))}</>
}
