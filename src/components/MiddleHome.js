import React from 'react'
// import { SiHomeassistantcommunitystore } from 'react-icons/si'
// import { GiGrassMushroom } from 'react-icons/gi'
// import { MdOutlineFamilyRestroom } from 'react-icons/md'
// import { SiWolfram } from 'react-icons/si'
import { icons } from '../data'
import styled from 'styled-components'

const MiddleHome = () => {
  return (
    <Wrapper>
      <div className='middleHome-container'>
        {icons.map((item) => {
          const { id, title, icon, description } = item
          return (
            <article key={id} className='container'>
              <div className='container-icons'>
                <button className='icon'>{icon}</button>
                <h4 className='title'>{title}</h4>
                <p>{description}</p>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .middleHome-container {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
  .container {
    padding: 1rem;
    background-color: var(--grey-1);
    margin-bottom: 4rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-3);
    transition: var(--transition);
    position: relative;
    :hover {
      box-shadow: var(--shadow-4);
    }
  }
  .icon {
    position: absolute;
    top: -30px;
    left: 50%;
    font-size: 3rem;
    border: transparent;
    color: var(--primary-5);
    background-color: transparent;
    transition: var(--transition);
    :hover {
      transform: scale(1.2);
    }
  }
`
export default MiddleHome
