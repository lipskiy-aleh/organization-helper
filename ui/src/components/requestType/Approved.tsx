import React from 'react'
import { CheckCircleTwoTone } from '@ant-design/icons'
import { StylesDiv } from './styles'

export const Approved: React.FC = () => {
  return (
    <StylesDiv>
      <CheckCircleTwoTone twoToneColor="#52c41a" style={{marginRight: '8px'}}/>
      Approved
    </StylesDiv>
  )
}
