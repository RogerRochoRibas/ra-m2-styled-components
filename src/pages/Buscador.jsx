import React from 'react'
import styled from 'styled-components'
import { Grid } from '../styles'
import Card from '../components/atoms/Card'

const BuscadorStyled = styled(Grid)`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`

function Buscador({ ...props }) {
  return (
    <BuscadorStyled columns="1fr 0.7fr" {...props}>
      <BuscadorStyled columns="repeat(3, 1fr)" {...props}>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
      </BuscadorStyled>
      <BuscadorStyled columns="repeat(1, 1fr)" {...props}>
      <Card>Hola</Card></BuscadorStyled>
    </BuscadorStyled>
  )
}

export default styled(Buscador)``
