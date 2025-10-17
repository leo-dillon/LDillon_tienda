import { createBrowserRouter } from 'react-router-dom'
import { Home, LDillon, NotFound } from '../../components/pages'

import { Layout } from '../../components/layout/Layout'

export const router = createBrowserRouter([ 
  {
    path:'/', 
    element: <Layout /> ,
    children: [
        { index: true,      element: <Home        />},
        { path:"/creador",  element: <LDillon     />},
        { path:"/*",        element: <NotFound    />},
    ]
  }
])