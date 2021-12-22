import React from 'react'
import styled, { css } from 'styled-components'

import { device, media, size } from '@/styled/vars'

const gap = 15
const gapInPX = `${gap}px`

const sectionHalfsizeInPX = {
  sm: `${(size.sm - gap * 2) / 2}px`,
  md: `${(size.md - gap * 2) / 2}px`,
  lg: `${(size.lg - gap * 2) / 2}px`,
  xl: `${(size.xl - gap * 2) / 2}px`,
  xxl: `${(size.xxl - gap * 2) / 2}px`,
}

export const SectionStyles = css`
  padding: 0 ${gapInPX};

  @media ${device.sm} {
    padding: 0 calc(50vw - ${sectionHalfsizeInPX.sm});
  }

  ${media.md} {
    padding: 0 calc(50vw - ${sectionHalfsizeInPX.md});
  }

  ${media.lg} {
    padding: 0 calc(50vw - ${sectionHalfsizeInPX.lg});
  }

  ${media.xl} {
    padding: 0 calc(50vw - ${sectionHalfsizeInPX.xl});
  }
  ${media.xxl} {
    padding: 0 calc(50vw - ${sectionHalfsizeInPX.xxl});
  }
`
const StyledSection = styled.section`
  ${SectionStyles}
`
// thanks! https://habr.com/ru/post/463923/
export const Section: React.FC = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}
