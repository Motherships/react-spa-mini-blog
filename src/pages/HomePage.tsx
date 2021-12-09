import React from 'react'

import { OrdinaryPage } from '@/components/layout/OrdinaryPage/OrdinaryPage'

export const HomePage: React.FC = () => {
  return (
    <OrdinaryPage sidebar={'test'}>
      <h1>HomePage</h1>
    </OrdinaryPage>
  )
}
