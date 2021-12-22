import React from 'react'

import { PictureWithDescription } from '@/components/images/PictureWithDescription/PictureWithDescription'
import { Section } from '@/components/layout/Section/Section'
import { UnorderedList } from '@/components/lists/UnorderedList/UnorderedList'
import { UnorderedListItem } from '@/components/lists/UnorderedList/UnorderedListItem'
import { Heading2 } from '@/components/typography/Heading2/Heading2'
import { MainSubtitle } from '@/components/typography/MainSubtitle/MainSubtitle'
import { MainTitle } from '@/components/typography/MainTitle/MainTitle'
import { Paragraph } from '@/components/typography/Paragraph/Paragraph'
import { PostAuthorCard } from '@/pages/posts/components/PostAuthorCard/PostAuthorCard'
import { PostTextSection } from '@/pages/posts/components/PostTextSection/PostTextSection'
import { PostThumbnail } from '@/pages/posts/components/PostThumbnail/PostThumbnail'
import picUrl from '@/public/images/pic.png'
import profilePicUrl from '@/public/images/profilepic.png'
import thumbnailUrl from '@/public/images/thumbnail.png'

const authorPicData = {
  src: profilePicUrl,
  width: 56,
  height: 56,
  alt: 'Alt for default profile pic',
}

const authorCard = {
  picture: authorPicData,
  name: 'Mika MAtikainen',
  dateCreated: new Date(2020, 4, 15).toString(),
  timeToRead: '4 min',
}

const thumbData = {
  src: thumbnailUrl,
  width: 1440,
  height: 900,
  alt: 'Alt for default thumbnail',
}

const picData = {
  src: picUrl,
  width: 854,
  height: 570,
  alt: 'Alt for default pic',
  description:
    'Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height.',
}

export const PostPredefinedPage: React.FC = () => {
  return (
    <>
      <Section>
        <MainTitle>
          A few words about this blog platform, Ghost, and how this site was
          made
        </MainTitle>
        <MainSubtitle>
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </MainSubtitle>
      </Section>
      <PostThumbnail {...thumbData} />

      <PostAuthorCard {...authorCard} />
      <PostTextSection>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at
          viverra.
        </Paragraph>
        <Paragraph>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui
          molestie, molestie lectus eu, semper lectus.
        </Paragraph>
      </PostTextSection>

      <PostTextSection>
        <Heading2>Next on the pipeline</Heading2>

        <Paragraph>
          Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
          dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
          quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
        </Paragraph>
        <Paragraph>
          Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam
          posuere maximus dui et fringilla.
        </Paragraph>
      </PostTextSection>

      <PictureWithDescription {...picData} />

      <PostTextSection>
        <Paragraph>
          Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Aliquam
          quis posuere ligula.
        </Paragraph>
        <Paragraph>
          In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo
          lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu.
          Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam
          posuere maximus dui et fringilla. Nulla non volutpat leo.
        </Paragraph>
      </PostTextSection>

      <PostTextSection>
        <Paragraph>A list looks like this:</Paragraph>
        <UnorderedList>
          <UnorderedListItem>First item in the list</UnorderedListItem>
          <UnorderedListItem>
            Second item in the list lorem ipsum dolor sit amet nunc felis dolor
            lorem ipsum sit amet
          </UnorderedListItem>
          <UnorderedListItem>Third item in the list</UnorderedListItem>
        </UnorderedList>
      </PostTextSection>

      <PostTextSection>
        <Paragraph>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Aliquam quis posuere ligula.
        </Paragraph>
      </PostTextSection>

      <PostTextSection>
        <Paragraph>
          Thanks for reading,
          <br />
          Mika
        </Paragraph>
      </PostTextSection>
    </>
  )
}
