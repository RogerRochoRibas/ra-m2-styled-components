import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: ${({ columns }) => columns || 'repeat(2, 1fr)' };
  grid-gap: ${({ gap }) => gap || '1.5rem' };
`

export default Grid
