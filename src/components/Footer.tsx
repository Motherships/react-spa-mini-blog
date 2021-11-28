import React from 'react'
import styled from 'styled-components'

const SomeTextInFooter = styled.h4`
  font-size: 1.5em;
  text-align: center;
  color: read;
`

export const Footer: React.FC = () => {
  return (
    <footer>
      <SomeTextInFooter>SomeTextInFooter</SomeTextInFooter>
    </footer>
  )
}
