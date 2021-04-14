import React from 'react'
import { StyledFooter } from './styles'

interface IProps {
    content: string
}

export const Footer:React.FC<IProps> = ({content}) => {
  return <StyledFooter>{content}</StyledFooter>
}
