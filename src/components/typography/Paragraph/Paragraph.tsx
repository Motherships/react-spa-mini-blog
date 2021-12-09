import React from 'react'
import styled from 'styled-components'

import { fonts } from '@/styled-vars'

const StyledParagraph = styled.p`
  font-family: ${fonts.newYork.medium};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 170%;
  /* or 34px */

  color: #000000;
`
export const Paragraph: React.FC = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>
}
