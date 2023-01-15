import React from 'react'
import styled from 'styled-components'
import { FlexBox, colors } from '../../styles'
import { Input, Icon, Button } from '../atoms'

const SubHeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: rgba(230, 242, 242, 255);
`

function SubHeader({ ...props }) {
  return (
    <SubHeaderStyled align="center" direction="row" {...props}>
      {/* Debería de ser un Select */}
      {/* Falta el label */}
      <Input id="piso" placeholder="Piso, chalet o garaje... " />
      {/* Debería de ser un Select */}
      {/* Falta el label */}
      <Input id="location" placeholder="Madrid, Barcelona o Zaragoza..." />
      <Button color={colors.tertiary} padding="3px">
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </Icon>
      </Button>
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
