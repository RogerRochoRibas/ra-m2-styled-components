import styled from 'styled-components'
import { colors } from '../../styles'

const StyledTitle = styled.h1`
  color: ${({ color }) => color || colors.font.headings};
  margin: 10px 0 10px 0px;
`

function Title({ level = 1, children }) {
  return <StyledTitle as={`h${level}`}>{children}</StyledTitle>
}

export default Title
