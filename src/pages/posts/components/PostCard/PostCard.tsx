import classNames from 'classnames'
import React from 'react'

import { OLink } from '@/components/links/OLink/OLink'
import { Paths } from '@/routes'
import { Post } from '@/types'

export const PostCard: React.FC<Post> = ({ id, title }) => {
  const sectionClass = classNames({ post: true, [`post-${id}`]: true })
  return (
    <section className={sectionClass}>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <OLink to={Paths.PostListPage + id}>{title}</OLink>
              </p>
            </div>
            <div className="media-right"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
