import styled from 'styled-components'

export const StyledNavigation = styled.div`
  display: flex;
  margin-bottom: 20px;
    > a {
      display: flex;
      margin-right: 10px;
      &:hover {
        cursor: pointer;
      }
    }
`

export const StyledCircle = styled.span`
  display: flex;
  justify-content: center;
  background-color: #f0f2f5;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  margin: 0 5px;
`
