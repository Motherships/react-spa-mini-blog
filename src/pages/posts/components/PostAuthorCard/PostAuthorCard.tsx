import React from 'react'
import styled from 'styled-components'

import type { PictureProps } from '@/components/images/Picture/Picture'
import { Picture } from '@/components/images/Picture/Picture'
import { SocialButtonLink } from '@/components/links/SocialButtonLink/SocialButtonLink'
import { PostSectionStyles } from '@/pages/posts/components/PostTextSection/PostTextSection'
import { fonts } from '@/styled-vars'

const StyledPostAuthorCard = styled.section`
  ${PostSectionStyles}

  .post-author-card__line {
    margin-bottom: 24px;
    width: 100%;
    height: 2px;
    background: black;
  }

  .post-author-card__wrapper {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
  }

  .post-author-card__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .post-author-card__name {
    margin: 0;
    font-family: ${fonts.sf.proText};
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #000000;
  }

  .post-author-card__meta {
    font-family: ${fonts.sf.proText};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #000000;
  }

  .post-author-card__social-buttons {
    margin-left: auto;
  }
`

type PostAuthorCardProps = {
  picture: PictureProps
  name: string
  dateCreated: string
  timeToRead: string
}

const getMonthStringFromMonthNumber = (monthNumber: number): string => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]

  return months[monthNumber]
}
const formatDateString = (dateString: string): string => {
  const date = new Date(dateString)

  return (
    getMonthStringFromMonthNumber(date.getMonth()) +
    ', ' +
    date.getDay() +
    ' ' +
    date.getFullYear()
  )
}

export const PostAuthorCard: React.FC<PostAuthorCardProps> = ({
  picture,
  name,
  dateCreated,
  timeToRead,
}) => {
  return (
    <StyledPostAuthorCard>
      <div className="post-author-card__line"></div>
      <div className="post-author-card__wrapper">
        <Picture {...picture} />
        <div className="post-author-card__info">
          <span className="post-author-card__name">{name}</span>
          <span className="post-author-card__meta">
            <time className="post-author-card__date">
              {formatDateString(dateCreated)}
            </time>
            <span className="post-author-card__separator"> · </span>
            <span className="post-author-card__time-to-read">
              {timeToRead} read
            </span>
          </span>
        </div>
        <div className="post-author-card__social-buttons">
          <SocialButtonLink to="/" />
          <button className="post-author-card__social-button"></button>
          <button className="post-author-card__social-button"></button>
        </div>
      </div>
    </StyledPostAuthorCard>
  )
}
