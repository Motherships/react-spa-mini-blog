import React from 'react'
import styled from 'styled-components'

import { fonts } from '@/styled-vars'

const StyledUnorderedList = styled.ul`
  padding: 0 16px;

  font-family: ${fonts.newYork.medium};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 170%;
  /* identical to box height, or 34px */

  color: #000000;
`
export const UnorderedList: React.FC = ({ children }) => {
  return <StyledUnorderedList>{children}</StyledUnorderedList>
}
