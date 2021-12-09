import classNames from 'classnames'
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

export type PictureProps = {
  className?: string
  srcList?: Array<Source>
} & Image

const StyledPicture = styled.picture`
  img {
    max-width: 100%;
    height: auto;
  }
`
export const Picture: React.FC<PictureProps> = ({
  className,
  loading = 'lazy',
  src,
  width,
  height,
  alt,
}) => {
  return (
    <StyledPicture className={classNames(className)}>
      {/* TODO: Implement sources for webp/avif/.. and x2 images */}
      <img
        loading={loading}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </StyledPicture>
  )
}
