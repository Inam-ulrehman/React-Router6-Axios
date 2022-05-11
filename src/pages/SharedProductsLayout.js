import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedProductsLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default SharedProductsLayout
