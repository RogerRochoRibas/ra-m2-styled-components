import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlexBox } from '../../styles'

const MapStyled = styled(FlexBox)`
  background: white;
  max-height: 100%;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid lightgray;
  background-color: #e6e6e6;
  border-radius: 5px;
  padding: 1rem;
`

function Map({ children, className = '' }) {
  return <MapStyled className={className}>{children}</MapStyled>
}
Map.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default styled(Map)``
