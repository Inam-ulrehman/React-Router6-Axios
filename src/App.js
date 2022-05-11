import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  About,
  Dashboard,
  Error,
  Home,
  Products,
  // ProtectedRoute,
  Register,
  SharedLayout,
  SharedProductsLayout,
  SingleProduct,
} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<SharedProductsLayout />}>
            <Route index element={<Products />} />
            <Route path='products/:productID' element={<SingleProduct />} />
          </Route>
          <Route path='*' element={<Error />} />
          <Route path='register' element={<Register />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
