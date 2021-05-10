import React from 'react'
import { StyledItem } from '../styles'

export interface IEmployeeProps {
    userName: string,
    userSurname: string,
}

export const EmployeeCmp: React.FC<IEmployeeProps> = (props) => {
  return(
    <StyledItem>
      <h3>Employee</h3>
      <div>{props.userName} {props.userSurname}</div>
    </StyledItem>
  )
}
