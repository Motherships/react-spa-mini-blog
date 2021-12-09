import React from 'react'
import styled from 'styled-components'

const StyledPostSection = styled.section`
  display: flex;
  max-width: 640px;
  margin: 0 auto;
  padding: 56px 0;
`
export const PostSection: React.FC = ({ children }) => {
  return <StyledPostSection>{children}</StyledPostSection>
}
