import React from 'react'
import { StyledFooter } from './styles'

export const Footer:React.FC = (props) => {
  return <StyledFooter>{props.children}</StyledFooter>
}
