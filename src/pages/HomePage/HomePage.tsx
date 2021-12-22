import React from 'react'

import { DynamicPostSingle } from '@/pages/posts/components/DynamicPostSingle/DynamicPostSingle'
import picUrl from '@/public/images/pic.png'
// import profilePicUrl from '@/public/images/profilepic.png'
import thumbnailUrl from '@/public/images/thumbnail.png'
const post = {
  id: 's14124',
  created: 'datestring',
  timeToRead: '4 min',
  author: {
    id: 'esadasd',
    name: 'name',
  },
  title: 'someTitle',
  content: [
    {
      id: '0',
      type: 'Section',
      children: [
        {
          id: '1',
          type: 'MainTitle',
          children:
            'A few words about this blog platform, Ghost, and how this site was made',
        },
        {
          id: '2',
          type: 'MainSubtitle',
          children:
            'Why Ghost (& Figma) instead of Medium, WordPress or other options?',
        },
      ],
    },
    {
      id: '3',
      type: 'PostThumbnail',
      props: {
        src: thumbnailUrl,
        width: 1440,
        height: 900,
        alt: 'Alt for default thumbnail',
      },
    },
    {
      id: '4',
      type: 'PostTextSection',
      children: [
        {
          id: '5',
          type: 'Paragraph',
          children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.',
        },
        {
          id: '6',
          type: 'Paragraph',
          children:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.',
        },
      ],
    },
    {
      id: '7',
      type: 'PostTextSection',
      children: [
        {
          id: '9',
          type: 'Heading2',
          children: 'Next on the pipeline',
        },
        {
          id: '9.1',
          type: 'Paragraph',
          children:
            'Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        },
        {
          id: '10',
          type: 'Paragraph',
          children:
            'Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.',
        },
      ],
    },
    {
      id: '11',
      type: 'PictureWithDescription',
      props: {
        src: picUrl,
        width: 854,
        height: 570,
        alt: 'Alt for default pic',
        description:
          'Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height.',
      },
    },
    {
      id: '12',
      type: 'PostTextSection',
      children: [
        {
          id: '13',
          type: 'Paragraph',
          children:
            'Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.',
        },
        {
          id: '14',
          type: 'Paragraph',
          children:
            ' In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.',
        },
      ],
    },
    {
      id: '15',
      type: 'PostTextSection',
      children: [
        {
          id: '16',
          type: 'Paragraph',
          children: 'A list looks like this:',
        },
        {
          id: '17',
          type: 'UnorderedList',
          children: [
            {
              id: '18',
              type: 'UnorderedListItem',
              children: 'First item in the list',
            },
            {
              id: '19',
              type: 'UnorderedListItem',
              children:
                'Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet',
            },
            {
              id: '20',
              type: 'UnorderedListItem',
              children: 'Third item in the list',
            },
          ],
        },
      ],
    },
    {
      id: '21',
      type: 'PostTextSection',
      children: [
        {
          id: '22',
          type: 'Paragraph',
          children:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.',
        },
      ],
    },
    {
      id: '23',
      type: 'PostTextSection',
      children: [
        {
          id: '24',
          type: 'Paragraph',
          children: 'Thanks for reading,\n\nMika',
        },
      ],
    },
  ],
}

export const HomePage: React.FC = () => {
  return <DynamicPostSingle post={post} />
}
