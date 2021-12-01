import type { RouteObject } from 'react-router-dom'

import { Layout } from '@/components/Layout'
import { HomePage } from '@/pages/HomePage'
import { NotFound } from '@/pages/NotFound'
import { PostFormPage } from '@/pages/PostFormPage'
import { PostListPage } from '@/pages/PostListPage'
import { PostPage } from '@/pages/PostPage'

export enum Paths {
  Index = '/',
  PostListPage = '/posts/',
  PostPage = '/posts/:id',
  PostFormPage = '/posts/new',
  NotFound = '/404',
  WildCard = '*',
}

export const routes: RouteObject[] = [
  {
    path: Paths.Index,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: Paths.PostListPage,
        element: <PostListPage />,
      },
      { path: Paths.PostPage, element: <PostPage /> },
      { path: Paths.PostFormPage, element: <PostFormPage /> },
      { path: Paths.WildCard, element: <NotFound /> },
    ],
  },
]
