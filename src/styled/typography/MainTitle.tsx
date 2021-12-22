import styled from 'styled-components'

import { fonts, media } from '@/styled/vars'
export const MainTitle = styled.h1`
  max-width: 858px;
  margin: 0 auto;
  padding-bottom: 32px;

  font-family: ${fonts.newYork.extraLarge};
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;

  text-align: center;

  color: #000000;

  ${media.lg} {
    font-size: 54px;
  }
`
