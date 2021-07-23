import React from 'react'

const Input = ({ inputValue, inputHandler }) => {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Where do you live?"
      value={inputValue}
      onChange={(e) => inputHandler(e)}
    />
  )
}

export default Input
