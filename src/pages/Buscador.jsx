import React from 'react'
import styled from 'styled-components'
import { Grid } from '../styles'
import { Map } from '../components/atoms'
import Houses from '../components/organisms/Houses'

const BuscadorStyled = styled(Grid)`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

function Buscador({ ...props }) {
  return (
    <BuscadorStyled columns="1fr 0.7fr" {...props}>
      <Houses />
      <BuscadorStyled columns="repeat(1, 1fr)" {...props}>
        <Map />
      </BuscadorStyled>
    </BuscadorStyled>
  )
}

export default styled(Buscador)``
