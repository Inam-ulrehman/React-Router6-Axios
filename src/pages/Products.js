import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const url = 'https://course-api.com/react-store-products'

const Products = () => {
  const [people, setPeople] = useState([])
  const fetchData = async () => {
    const response = await axios.get(url)
    const { data } = response
    setPeople(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Wrapper>
      <h1 className='title'> products </h1>
      <div className='title-underline'></div>
      <div className='products'>
        {people.map((item) => {
          const { id, name, price, image } = item
          return (
            <article key={id}>
              <div className='img'>
                <img src={image} alt='' />
              </div>
              <div className='footer'>
                <p>{name}</p>
                <p>$ {price}</p>
              </div>
              <Link className='btn btn-style' to={`products/${id}`}>
                More Info{' '}
              </Link>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .products {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    gap: 1rem;
    @media (min-width: 680px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1120px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .img {
    img {
      height: 200px;
      width: 200px;
      border-top-left-radius: var(--borderRadius);
      border-top-right-radius: var(--borderRadius);
      box-shadow: var(--shadow-2);
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    width: 200px;
    p {
      margin: 0;
    }
  }
  .btn-style {
    padding: 0.2rem;
    font-size: var(--small-text);
  }
`

export default Products
