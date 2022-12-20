import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'

const StyledButton = styled.button`
  border-radius: 5px;
  border-style: hidden;
  padding: ${({ padding }) => padding || '5px'};
  color: white;
  margin: 5px;
  &:hover {
    filter: brightness(1.1);
  }
`

export default function Button({
  children,
  padding,
  color = colors.main,
  onClick = () => {},
}) {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      style={{ backgroundColor: color }}
      padding={padding}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  padding: PropTypes.string,
  onClick: PropTypes.func,
}
