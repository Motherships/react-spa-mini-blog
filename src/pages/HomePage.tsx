import React from 'react'

import { PostThumbnail } from '@/components/images/PostThumbnail/PostThumbnail'
import { PostSection } from '@/components/layout/PostSection/PostSection'
import { Section } from '@/components/layout/Section/Section'
import { MainSubtitle } from '@/components/typography/MainSubtitle/MainSubtitle'
import { MainTitle } from '@/components/typography/MainTitle/MainTitle'
import { Paragraph } from '@/components/typography/Paragraph/Paragraph'
const thumbData = {
  src: '/src/public/images/thumbnail.png',
  width: 1440,
  height: 900,
  alt: 'Alt for default thumbnail',
}
export const HomePage: React.FC = () => {
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
      <PostSection>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at
          viverra. <br /> <br />
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui
          molestie, molestie lectus eu, semper lectus.
        </Paragraph>
      </PostSection>
    </>
  )
}
