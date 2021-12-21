import React from 'react'

import { OrdinaryPage } from '@/components/layout/OrdinaryPage/OrdinaryPage'
import { OLink } from '@/components/links/OLink/OLink'
import { Paths } from '@/routes'
export const NotFound: React.FC = () => {
  return (
    <OrdinaryPage>
      <h1>404 not found</h1>
      <OLink className="navbar-item" to={Paths.Index}>
        Home
      </OLink>
    </OrdinaryPage>
  )
}
