import React from 'react'
import styled from 'styled-components'

const StyledPostSection = styled.section`
  max-width: 640px;
  margin: 56px auto;
`
export const PostTextSection: React.FC = ({ children }) => {
  return <StyledPostSection>{children}</StyledPostSection>
}
