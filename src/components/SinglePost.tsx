import React from 'react'

import { Post } from '@/types'

export const SinglePost: React.FC<Post> = ({ id, title, content }) => {
  return (
    <section className={['article', id].join('')}>
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
