import React from 'react'
import { MinusCircleTwoTone } from '@ant-design/icons'
import { StylesDiv } from './styles'

export const Cancel:React.FC = () => {
  return (
    <StylesDiv>
      <MinusCircleTwoTone style={{marginRight: '8px'}}/>
      Canceled
    </StylesDiv>
  )
}
