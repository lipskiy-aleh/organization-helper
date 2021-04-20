import React from 'react'
import { StyledFooter } from './styles'

/*interface IProps {
    content: string
}*/

export const Footer:React.FC = (props) => {
  return <StyledFooter>{props.children}</StyledFooter>
}
