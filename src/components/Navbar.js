import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [value, setValue] = useState(false)
  const notify = () => toast.success(' My axios working')

  const openBar = () => {
    setValue(!value)
  }
  useEffect(() => {}, [])
  return (
    <Wrapper>
      <div className='container'>
        <div className='nav-icon'>
          <button type='button' onClick={openBar}>
            {value ? <AiOutlineClose /> : <FaBars />}
          </button>
          <div className='show-links'>
            <NavLink className='nav-link' to={'/'}>
              Home
            </NavLink>
            <NavLink className='nav-link' to={'/about'}>
              About
            </NavLink>
            <NavLink onClick={notify} className='nav-link' to={'products'}>
              Products
            </NavLink>
            <NavLink className='nav-link' to={'/register'}>
              Login
            </NavLink>
            <ToastContainer />
          </div>
          {value && (
            <div className='links'>
              <NavLink className='nav-link' to={'/'}>
                Home
              </NavLink>
              <NavLink className='nav-link' to={'/about'}>
                About
              </NavLink>
              <NavLink onClick={notify} className='nav-link' to={'products'}>
                Products
              </NavLink>
              <NavLink className='nav-link' to={'/register'}>
                Login
              </NavLink>
              <ToastContainer />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
  }
  .links {
    display: grid;
  }
  .nav-link {
    margin-left: 1rem;
    padding: 0.7rem;
    font-size: 1.2rem;
    transition: var(--transition);
    margin: 0;
    background-color: var(--grey-1);
    :hover {
      padding-left: 1rem;
    }
  }
  .nav-icon {
    button {
      float: right;
      border: transparent;
      background: transparent;
      font-size: 2rem;
      transition: var(--transition);
      color: var(--primary-5);
      @media (min-width: 768px) {
        display: none;
      }
      :hover {
        transform: scale(1.2);
      }
    }
  }
  .show-links {
    @media (max-width: 768px) {
      display: none;
    }
  }
`

export default Navbar
