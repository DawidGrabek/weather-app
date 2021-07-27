import React, { useRef, useEffect } from 'react'

const Input = ({ inputValue, inputHandler }) => {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <input
      type="text"
      className="search-input"
      placeholder="Where do you live?"
      value={inputValue}
      onChange={(e) => inputHandler(e)}
      ref={inputRef}
    />
  )
}

export default Input
