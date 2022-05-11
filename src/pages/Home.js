import React from 'react'
import styled from 'styled-components'
import logo from '../images/LandingPage.svg'
import MiddleHome from '../components/MiddleHome'
const Home = () => {
  return (
    <Wrapper className='section'>
      <div className='Home-page'>
        <div className='img-container'>
          <img src={logo} alt='' />
        </div>
        <div className='home-text'>
          <h1 className='title'>
            Home <span>Furniture</span>{' '}
          </h1>
          <div className='title-underline'></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
            ipsum optio doloribus earum sunt? Et excepturi ipsum modi, illum
            saepe veniam aspernatur. Error, sapiente dolorem. Earum praesentium
            fugiat id.
          </p>
        </div>
      </div>
      {/* Middle section */}
      <MiddleHome />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .Home-page {
    height: 100vh;
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .img-container {
    max-height: 400px;
    max-width: 400px;

    img {
      width: 100%;
    }
  }
  .title {
    span {
      color: var(--primary-5);
    }
  }
  p {
    color: var(--textColor);
  }
`
export default Home
