import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../../styles/Card'
import { Title, Text, Button } from '../atoms'
import { FlexBox } from '../../styles'

const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 60%;
  border-radius: 10px 10px 0 0;
`

const CardText = styled.div`
  padding: 1rem;
`

const CardHouseStyled = styled(Card)``

function CardHouse({ image, price, title, children }) {
  return (
    <CardHouseStyled>
      <CardImg src={image} alt={title} />
      <CardText>
        <Title level={3}>{children}</Title>
        <FlexBox direction="row" justify="space-between" align="center">
          <Text color="black" fontWeight="bold" fontSize="16px">
            {price}
          </Text>
          <Button padding="8px">Localizar</Button>
        </FlexBox>
      </CardText>
    </CardHouseStyled>
  )
}

Card.propTypes = {
  children: PropTypes.node,
}

export default styled(CardHouse)``
