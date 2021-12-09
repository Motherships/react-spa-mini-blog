import React from 'react'
import styled from 'styled-components'

import { fonts } from '@/styled-vars'

const StyledMainSubtitle = styled.h2`
  max-width: 626px;
  margin: 0 auto;
  padding-bottom: 52px;

  font-family: ${fonts.sf.mono};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 170%;
  /* or 34px */

  text-align: center;

  color: #000000;
`
export const MainSubtitle: React.FC = ({ children }) => {
  return <StyledMainSubtitle>{children}</StyledMainSubtitle>
}
