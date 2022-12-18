import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Title } from '../atoms'

const HeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
`

function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between">
      <Title level='3'>MIPISO.com</Title>
      <div>
        <nav>
          <a href="/">Buscador</a>
          <a href="/">Datos</a>
          <a href="/">Mi Perfil</a>
        </nav>
      </div>
    </HeaderStyled>
  )
}

export default Header
