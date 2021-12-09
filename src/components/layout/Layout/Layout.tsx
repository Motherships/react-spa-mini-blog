import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/footer/Footer/Footer'
import { Header } from '@/components/header/Header/Header'
export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
