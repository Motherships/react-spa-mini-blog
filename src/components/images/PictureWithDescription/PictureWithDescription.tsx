import React from 'react'
import styled from 'styled-components'

import type { PictureProps } from '@/components/images/Picture/Picture'
import { Picture } from '@/components/images/Picture/Picture'
import { fonts } from '@/styled/vars'

type PictureWithDescription = {
  description?: string
} & PictureProps

const StyledPictureWithDescription = styled.figure`
  margin: 52px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  figcaption {
    max-width: 480px;
    margin-top: 12px;
    font-family: ${fonts.sf.proText};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */

    text-align: center;

    color: #000000;
  }
`
export const PictureWithDescription: React.FC<PictureWithDescription> = ({
  description,
  ...props
}) => {
  return (
    <StyledPictureWithDescription>
      <Picture {...props} />
      {description && <figcaption>{description}</figcaption>}
    </StyledPictureWithDescription>
  )
}
