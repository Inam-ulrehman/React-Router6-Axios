import React from 'react'

const ForumRow = ({ name, type, value, handleChange, labelText }) => {
  return (
    <div>
      <label className='form-label' htmlFor={name}>
        {labelText || name}
      </label>
      <input
        className='form-input'
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default ForumRow
