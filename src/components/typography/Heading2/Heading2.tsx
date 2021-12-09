import React from 'react'
import styled from 'styled-components'

import { fonts } from '@/styled-vars'

const StyledHeading2 = styled.h2`
  margin-top: 24px;
  margin-bottom: 24px;
  font-family: ${fonts.newYork.medium};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 170%;
  /* or 34px */

  color: #000000;
`
export const Heading2: React.FC = ({ children }) => {
  return <StyledHeading2>{children}</StyledHeading2>
}
