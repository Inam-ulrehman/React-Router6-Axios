import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import axios from 'axios'
const url = 'https://course-api.com/react-store-products'

const SingleProduct = () => {
  const [people, setPeople] = useState([])
  const { productID } = useParams()
  const fetchData = async () => {
    const response = await axios.get(url)
    const { data } = response
    const newPerson = data.find((item) => item.id === productID)
    setPeople(newPerson)
  }
  console.log(people)
  const { category, company, description, image, name, price, shipping } =
    people

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <div className='container'>
        <h1 className='title'>{name}</h1>
        <div className='title-underline'></div>
        <div className='img-text'>
          <div className='img-container'>
            <img src={image} alt='' />
            <div className='img-footer'>
              <p>{shipping ? 'Available' : 'out of stock'}</p>
              <p>$ {price}</p>
            </div>
          </div>
          <div className='text'>
            <h5>Category : {category}</h5>
            <h5>Company : {company}</h5>
          </div>
        </div>
        <div className='title'>
          <Link className='btn' to={'/products/'}>
            Back to products
          </Link>
        </div>
        <div className='Description'>
          <h1 className='title'>Description</h1>
          <div className='title-underline'></div>
          <p>{description}</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 4rem;
  .img-text {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: var(--fixed-width);
    margin: 0 auto;
    box-shadow: var(--shadow-2);
    margin-bottom: 3rem;
    @media (min-width: 768px) {
      max-width: 900px;
    }
  }
  .img-container {
    max-width: 250px;
    max-height: 250px;
    background-color: var(--grey-2);
    overflow: hidden;
    @media (min-width: 768px) {
      max-width: 350px;
      max-height: 400px;
    }

    img {
      width: 100%;

      display: block;
      object-fit: cover;
      border-top-left-radius: var(--borderRadius);
      border-top-right-radius: var(--borderRadius);
    }
  }
  .img-footer {
    display: flex;
    justify-content: space-around;
    background-color: var(--grey-2);
  }

  .Description {
    margin-top: 3rem;
    display: grid;
    place-items: center;
  }
`

export default SingleProduct
