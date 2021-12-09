import React from 'react'
import styled from 'styled-components'

const StyledColumns = styled.div`
  display: flex;

  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;

  &:last-child {
    margin-bottom: -0.75rem;
  }

  &:not(:last-child) {
    margin-bottom: calc(1.5rem - 0.75rem);
  }
`
export const Columns: React.FC = ({ children }) => {
  return <StyledColumns>{children}</StyledColumns>
}
