import React from 'react'

import { InfoCircleOutlined } from '@ant-design/icons'
import { StyledCard,
  StyledCardHeader,
  StyledCardProgress } from './styled'

interface ICardProps {
    title: string
}

export const Card: React.FC<ICardProps> = (props) => {
  return (
    <StyledCard>

      <StyledCardHeader>
        <span>{props.title}</span>
        <InfoCircleOutlined />
      </StyledCardHeader>

      <StyledCardProgress>{props.children}</StyledCardProgress>
    </StyledCard>
  )
}
