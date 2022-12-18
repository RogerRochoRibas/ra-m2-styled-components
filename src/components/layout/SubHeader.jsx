import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import Input from '../atoms/Input'

const SubHeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: rgba(230, 242, 242, 255);

  &:hover {
    background-color: ${(props) =>
      props.hoverColor ? props.hoverColor : 'lightgreen'};
  }
`

function SubHeader({ ...props }) {
  return (
    <SubHeaderStyled direction="row" {...props}>
      <Input id="piso" placeholder="Piso, chalet o garaje... " />
      <Input id="location" placeholder="Madrid, Barcelona o Zaragoza..." />
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
