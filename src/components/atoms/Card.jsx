import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlexBox } from '../../styles'

const CardStyled = styled(FlexBox)`
  background: white;
  height: 300px;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 1rem;
`

function Card({ children, className = '' }) {
  return <CardStyled className={className}>{children}</CardStyled>
}
Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default styled(Card)``
