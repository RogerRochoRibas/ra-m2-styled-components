import React from 'react'
import styled from 'styled-components'
import { Grid } from '../../styles'
import CardHouse from '../molecules/CardHouse'
import CardPhoto from '../molecules/CardPhoto'
import image from '../../assets/house.jpg'

const HousesStyled = styled(Grid)`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

function Houses({ ...props }) {
  return (
      <HousesStyled columns="repeat(3, 1fr)" {...props}>
        <CardPhoto price="939.000€" image={image}>
          Piso en Barcelona, Gracia
        </CardPhoto>
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
      </HousesStyled>
  )
}

export default styled(Houses)``
