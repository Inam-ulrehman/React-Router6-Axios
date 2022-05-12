import { useState } from 'react'
import styled from 'styled-components'
import ForumRow from '../components/ForumRow'

const initialState = {
  name: '',
  email: '',
  password: '',
  isRegister: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }
  const handleRegister = () => {
    setValues({ ...values, isRegister: !values.isRegister })
  }
  return (
    <Wrapper>
      <form className='form' onClick={handleSubmit}>
        <h3 className='title'>{values.isRegister ? 'Register' : 'Login'}</h3>
        {/* Name input */}
        {values.isRegister && (
          <ForumRow
            name={'name'}
            type={'text'}
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <ForumRow
          name={'email'}
          type={'email'}
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <ForumRow
          name={'password'}
          type={'password'}
          value={values.password}
          handleChange={handleChange}
        />

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p className='title'>
          {!values.isRegister ? 'please register here' : 'please login here'}
          <button type='button' className='btn' onClick={handleRegister}>
            {values.isRegister ? 'Login ?' : 'Register ?'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.section``
export default Register
