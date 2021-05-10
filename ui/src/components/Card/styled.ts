import styled from 'styled-components'

const StyledCard = styled.div`
  padding: 10px;
  background-color: white;
  box-shadow: 0 0 14px 6px rgba(0, 0, 0, 0.15);
`
const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const StyledCardProgress = styled.div`
  display: flex;
  justify-content: center;
`

export { StyledCard, StyledCardHeader, StyledCardProgress }
