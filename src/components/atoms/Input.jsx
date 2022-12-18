import React from 'react'
import styled from 'styled-components'

const NumberInputStyled = styled.input`
  height: 40px;
  width: 300px;
  padding: 0.5rem;
  margin: 10px;
  border-radius: 0.5rem;
  border: 1px solid #727272;
  font-size: 16px;

  &:hover {
    border: 1px solid;
  }
  &.error {
    border: 1px solid #fecaca !important;
  }
  &:focus {
    outline: 0 none;
  }
`

function Input({onChange, id, type, placeholder }) {
  return (
    <NumberInputStyled
      type={type}
      name={id}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      id={id}
    />
  )
}

export default Input