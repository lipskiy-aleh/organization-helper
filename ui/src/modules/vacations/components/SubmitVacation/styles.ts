import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: grid;
  grid-column-gap: 30px;
  padding: 20px 100px;
  grid-template-columns: 1fr 2fr 1fr;
  
  & > * {
    box-shadow: 0 0 14px 6px rgba(0, 0, 0, 0.15);
    background: white;
  }
`
