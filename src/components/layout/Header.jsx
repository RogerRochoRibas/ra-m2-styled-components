import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Title } from '../atoms'
import NavBar from './NavBar'

const HeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
`

function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between">
      <Title level="3">MIPISO.com</Title>
      <NavBar />
    </HeaderStyled>
  )
}

export default Header
