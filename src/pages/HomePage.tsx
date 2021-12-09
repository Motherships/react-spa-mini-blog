import React from 'react'

import { Section } from '@/components/layout/Section/Section'
import { MainSubtitle } from '@/components/typography/headings/MainSubtitle/MainSubtitle'
import { MainTitle } from '@/components/typography/headings/MainTitle/MainTitle'

export const HomePage: React.FC = () => {
  return (
    <Section>
      <MainTitle>
        A few words about this blog platform, Ghost, and how this site was made
      </MainTitle>
      <MainSubtitle>
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
      </MainSubtitle>
    </Section>
  )
}
