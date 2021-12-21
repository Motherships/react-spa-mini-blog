import React from 'react'
import styled from 'styled-components'

import type { PictureProps } from '@/components/images/Picture/Picture'
import { Picture } from '@/components/images/Picture/Picture'

const StyledPostThumbnail = styled(Picture)`
  display: flex;
  justify-content: center;
`

export const PostThumbnail: React.FC<PictureProps> = ({ ...props }) => {
  return <StyledPostThumbnail {...props} />
}
