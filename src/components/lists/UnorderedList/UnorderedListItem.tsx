import React from 'react'
import styled from 'styled-components'

const StyledUnorderedListItem = styled.li``
export const UnorderedListItem: React.FC = ({ children }) => {
  return <StyledUnorderedListItem>{children}</StyledUnorderedListItem>
}
