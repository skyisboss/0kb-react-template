import { RouteObject,    } from 'react-router-dom'
import Layout from '../layout'
import { default as HomePage } from '../views/home'
import React from 'react'
import LazyRoute from './lazy-route'

const AboutPageLazy = React.lazy(() => import('../views/home/about'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: (
          <LazyRoute title="games">
            <AboutPageLazy />
          </LazyRoute>
        ),
      },
    ],
  },
]
export default routes