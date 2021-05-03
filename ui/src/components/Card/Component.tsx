import React from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { StyledCard,
  StyledCardHeader,
  StyledCardProgress,
} from './styled'

interface ICardProps {
    title: string
    text?: string
}

export const Card: React.FC<ICardProps> = (props) => {
  return (
    <StyledCard>

      <StyledCardHeader>
        <span>{props.title}</span>

        <Tooltip placement="bottom" title={props.text}>
          <InfoCircleOutlined style={{cursor: 'pointer'}}/>
        </Tooltip>
      </StyledCardHeader>

      <StyledCardProgress>{props.children}</StyledCardProgress>
    </StyledCard>
  )
}
