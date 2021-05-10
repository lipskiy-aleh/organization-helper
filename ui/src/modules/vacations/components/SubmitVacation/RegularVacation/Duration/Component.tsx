import React from 'react'
import { StyledItem } from '../styles'

export interface IDurationProps {
    duration: number,
}

export const DurationCmp: React.FC<IDurationProps> = (props) => {
  return(
    <StyledItem>
      <h3>Duration</h3>
      <div>{props.duration ? props.duration + 'd'
        : <i style={{color: '#1890ff'}}>Select period!</i>}</div>
    </StyledItem>
  )
}
