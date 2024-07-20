import React from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Components/RootLayout'
import Meal from './Pages/Meal'
import Tutorial from './Pages/Tutorial'


const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          index:true,
          path:'home-page',
          element:<Home/>
        },{
          path:'meal-page/:attr',
          element:<Meal/>
        },{
          path:'tutorial-page/:para',
          element:<Tutorial/>
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
