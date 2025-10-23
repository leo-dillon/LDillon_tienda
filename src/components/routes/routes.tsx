import { createBrowserRouter } from 'react-router-dom'
import { Home, LDillon, NotFound } from '../../components/pages'

import { Layout } from '../../components/layout/Layout'
import { Tienda } from '../pages/Tienda'
import { Product } from '../pages/Product'

export const router = createBrowserRouter([ 
  {
    path:'/', 
    element: <Layout /> ,
    children: [
        { index: true,              element: <Home        />},
        { path:"/creador",          element: <LDillon     />},
        { path:"/tienda",           element: <Tienda      />},
        { path:"/producto/:slug",   element: <Product     />},
        { path:"/*",                element: <NotFound    />},
    ]
  }
])