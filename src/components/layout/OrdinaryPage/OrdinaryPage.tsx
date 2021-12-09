import React from 'react'

import { Column } from '@/components/layout/Column/Column'
import { Columns } from '@/components/layout/Columns/Columns'
import { Section } from '@/components/layout/Section/Section'
import { Sidebar } from '@/components/layout/Sidebar/Sidebar'
type OrdinaryPageProps = {
  children: React.ReactNode
  sidebar?: React.ReactNode
}
export const OrdinaryPage: React.FC<OrdinaryPageProps> = ({
  children,
  sidebar,
}) => {
  return (
    <main className="main">
      <Section>
        <Columns>
          <Column>{children}</Column>
          {sidebar && <Sidebar>{sidebar}</Sidebar>}
        </Columns>
      </Section>
    </main>
  )
}
