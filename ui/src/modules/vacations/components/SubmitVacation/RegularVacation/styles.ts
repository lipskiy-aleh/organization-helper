import styled from 'styled-components'
import { Form } from 'antd'

const StyledWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  background-color: white;

  & h2 {
    align-self: center;
    color: #1890ff;
  }
  
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`

const StyledItem = styled.div`
  display: flex;
  
  & h3 {
    min-width: 100px;
    margin-right: 100px;
    margin-bottom: 0;
  }
`

const StyledLink = styled.a`
  color: white;
  
  &:hover {
    color: #1890ff;
  }
`

const StyledManager = styled.p`
  margin-bottom: 0;
  
    &:hover {
      color: #1890ff;
      cursor: pointer;
    }
`

export { StyledWrapper, StyledItem, StyledLink, StyledManager }
