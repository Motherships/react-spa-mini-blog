import React from 'react'
import styled, { css } from 'styled-components'

export const PostSectionStyles = css`
  max-width: 640px;
  margin: 56px auto;
  padding: 0 15px;
`
const StyledPostSection = styled.section`
  ${PostSectionStyles}
`
export const PostTextSection: React.FC = ({ children }) => {
  return <StyledPostSection>{children}</StyledPostSection>
}
