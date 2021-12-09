import React from 'react'
import styled from 'styled-components'

const StyledPostSection = styled.section`
  max-width: 640px;
  margin: 56px auto;
  padding: 0 15px;
`
export const PostTextSection: React.FC = ({ children }) => {
  return <StyledPostSection>{children}</StyledPostSection>
}
