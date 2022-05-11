import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

const SharedLayout = () => {
  return (
    <Wrapper className='section'>
      <Navbar />
      <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.section``
export default SharedLayout
