import React from 'react'
import styled from 'styled-components'

const StyledOrderedList = styled.li``
export const OrderedListItem: React.FC = ({ children }) => {
  return <StyledOrderedList>{children}</StyledOrderedList>
}
