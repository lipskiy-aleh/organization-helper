import React from 'react'
import { EllipsisOutlined } from '@ant-design/icons'
import { StylesDiv } from './styles'

export const InProgress:React.FC = () => {
  return (
    <StylesDiv>
      <EllipsisOutlined style={{marginRight: '8px'}}/>
      In progress
    </StylesDiv>
  )
}
