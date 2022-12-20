import React from 'react'
import styled from 'styled-components'
import { Grid } from '../styles'
import { Map } from '../components/atoms'
import CardHouse from '../components/molecules/CardHouse'
import image from '../assets/house.jpg'

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
      <BuscadorStyled columns="repeat(3, 1fr)" {...props}>
        <CardHouse price="939.000€" image={image}>
          Piso en Barcelona, Gracia
        </CardHouse>
        <CardHouse price="939.000€" image={image}>
          Piso en Barcelona, Gracia
        </CardHouse>
        <CardHouse price="939.000€" image={image}>
          Piso en Barcelona, Gracia
        </CardHouse>
        <CardHouse price="939.000€" image={image}>
          Piso en Barcelona, Gracia
        </CardHouse>
        <CardHouse price="939.000€" image={image}>
          Piso en Barcelona, Gracia
        </CardHouse>
        <CardHouse price="939.000€" image={image}>
          Piso en Barcelona, Gracia
        </CardHouse>
        <CardHouse price="939.000€" image={image}>
          Piso en Barcelona, Gracia
        </CardHouse>
        <CardHouse price="939.000€" image={image}>
          Piso en Barcelona, Gracia
        </CardHouse>
        <CardHouse price="939.000€" image={image}>
          Piso en Barcelona, Gracia
        </CardHouse>
      </BuscadorStyled>
      <BuscadorStyled columns="repeat(1, 1fr)" {...props}>
        <Map />
      </BuscadorStyled>
    </BuscadorStyled>
  )
}

export default styled(Buscador)``
