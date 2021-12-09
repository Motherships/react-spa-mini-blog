import React from 'react'
import styled from 'styled-components'

import { fonts } from '@/styled-vars'

const StyledOrderedList = styled.ol`
  padding: 0 16px;

  font-family: ${fonts.newYork.medium};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 170%;
  /* identical to box height, or 34px */

  color: #000000;
`
export const OrderedList: React.FC = ({ children }) => {
  return <StyledOrderedList>{children}</StyledOrderedList>
}
