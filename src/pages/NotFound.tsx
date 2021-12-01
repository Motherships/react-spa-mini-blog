import React from 'react'
import { Link } from 'react-router-dom'

import { OrdinaryPage } from '@/components/OrdinaryPage'
import { Paths } from '@/routes'
export const NotFound: React.FC = () => {
  return (
    <OrdinaryPage>
      <h1>404 not found</h1>
      <Link className="navbar-item" to={Paths.Index}>
        Home
      </Link>
    </OrdinaryPage>
  )
}
