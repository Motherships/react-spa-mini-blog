import React from 'react'
import styled from 'styled-components'

type Image = {
  loading?: 'eager' | 'lazy'
  src: string
  width: number
  height: number
  alt: string
}

type Source = {
  sizes: string
  src: string
  srcset: string
  type: string
  media: string
}

type PostThumbnailProps = {
  srcList?: Array<Source>
} & Image

const StyledPostThumbnail = styled.picture`
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
  }
`
export const PostThumbnail: React.FC<PostThumbnailProps> = ({
  loading = 'lazy',
  src,
  width,
  height,
  alt,
}) => {
  return (
    <StyledPostThumbnail>
      {/* TODO: Implement sources for webp/avif/.. and x2 images */}
      <img
        loading={loading}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </StyledPostThumbnail>
  )
}
