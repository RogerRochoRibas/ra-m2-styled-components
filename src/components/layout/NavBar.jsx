import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'

const NavBarStyled = styled(FlexBox)`
  list-style-type: none;
  gap: 2rem;
  a:first-child {
    font-weight: bold;
    color: rgba(132, 123, 166, 255);
  }
`

function NavBar() {
  return (
    <NavBarStyled as="ul" direction="row" justify="end">
      <a to="/">
        <li>Buscador</li>
      </a>
      <a to="/">
        <li>Datos</li>
      </a>
      <a to="/">
        <li>Mi Perfil</li>
      </a>
    </NavBarStyled>
  )
}

export default NavBar
