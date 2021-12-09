import React from 'react'
import styled from 'styled-components'

import { Navbar } from '@/components/header/navbar/Navbar/Navbar'
import { SectionStyles } from '@/components/layout/Section/Section'

const StyledHeader = styled.header`
  ${SectionStyles}
  margin-bottom: 52px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
`
export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Navbar />
    </StyledHeader>
  )
}
