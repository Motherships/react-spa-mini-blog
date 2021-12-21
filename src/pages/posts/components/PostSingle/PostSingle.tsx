import classNames from 'classnames'
import React from 'react'

import { Post } from '@/types'

export const PostSingle: React.FC<Post> = ({ id, title, content }) => {
  const sectionClass = classNames({ post: true, [`post-${id}`]: true })

  return (
    <section className={sectionClass}>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
            <div className="media-right"></div>
          </div>
          <div className="content">{content}</div>
        </div>
      </div>
    </section>
  )
}
