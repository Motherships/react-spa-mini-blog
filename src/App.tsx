import 'bulma'

import React from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HomePage } from '@/pages/HomePage'
import { PostFormPage } from '@/pages/PostFormPage'
const App: React.FC = () => {
  return (
    <>
      <Header />
      <HomePage />
      <PostFormPage />
      <Footer />
    </>
  )
}

export default App
