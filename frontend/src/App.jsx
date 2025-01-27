import React from 'react'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

const appRouter  = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])

const App = () => {
  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>

  )
}

export default App