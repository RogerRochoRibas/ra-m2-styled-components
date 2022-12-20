import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../../styles/Card'
import { Title } from '../atoms'

const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-color: red;
  border-radius: 10px 10px 0 0;
`

const CardText = styled.div`
  position: absolute;
  width: 100%;
  padding: 10px;
`

const CardPhotoStyled = styled(Card)``

function CardPhoto({ image, price, title, children }) {
  return (
    <CardPhotoStyled>
      <CardImg src={image} alt={title} />
      <CardText>
        <Title level={3}>{children}</Title>
        <Title level={3}>{price}</Title>
      </CardText>
    </CardPhotoStyled>
  )
}

Card.propTypes = {
  children: PropTypes.node,
}

export default styled(CardPhoto)``
