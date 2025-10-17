import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Header } from './components/sectionFijas/header'
import { Home } from './components/pages/Home'
import { LDillon } from './components/pages/LDillon'
import { NotFound } from './components/pages/NotFound'

function App() {

  const Router = createBrowserRouter([
    { 
      path:"/", 
      element: <Home />,
      errorElement: <NotFound />,
      children: [
          { path:"creador", element: <LDillon />},
      ]
    },
    { path:"/*", element: <NotFound />},
  ])

  return (
    < >
      <Header 
        styles='px-8 py-2 flex bg-red-200'
      />
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
