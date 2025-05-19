import React from 'react'
import Home from './Pages/Home/Home'
import Product from './Pages/Prodcut/Product'
import Resources from './Pages/Resources/Resources'
import Science from './Pages/Science/Science'
import Aboutus from './Pages/Aboutus/Aboutus'
import Signin from './Pages/Signin/Signin'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Layout/NavBar'
import Page404 from './Pages/Page404/Page404'

const App = () => {
  const router  = createBrowserRouter([
    { path:'/' ,element:<Home/>},
    { path:'/Aboutus' , element:<div>
      <Navbar/>
      <Aboutus/></div>},
    { path:'/Product' ,element:<div>
      <Navbar/>
      <Product/></div>},
    { path:'/Science' ,element:<div>
      <Navbar/>
      <Science/></div>},
    { path:'/Resources' ,element:<div>
      <Navbar/>
      <Resources/></div>},
    { path:'/Signin' ,element:<div>
      <Navbar/>
      <Signin/></div>},
    { path:'/*' ,element:<div>
      <Page404/></div>},

  ])
  return (
<div>
  <RouterProvider router={router}/>
</div>
  )
}

export default App
