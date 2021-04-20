import styled from 'styled-components'

const StyledOverview = styled.div`
    padding: 20px;
`

const StyledContainerCards = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`




export { StyledContainerCards, StyledOverview }
