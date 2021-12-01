import React from 'react'
import { Link } from 'react-router-dom'

import { Paths } from '@/routes'
import { Post } from '@/types'

export const PostCard: React.FC<Post> = ({ id, title }) => {
  return (
    <section className={['article', id].join('')}>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <Link to={Paths.PostListPage + id}>{title}</Link>
              </p>
            </div>
            <div className="media-right"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
