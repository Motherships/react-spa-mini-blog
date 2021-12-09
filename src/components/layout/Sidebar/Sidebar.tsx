import React from 'react'

import { Column } from '@/components/layout/Column/Column'
export const Sidebar: React.FC = ({ children }) => {
  return <Column className="is-4">{children}</Column>
}
