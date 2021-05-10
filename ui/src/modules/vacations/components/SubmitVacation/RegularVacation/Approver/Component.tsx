import React from 'react'
import { Avatar, Tooltip } from 'antd'
import { StyledItem, StyledLink, StyledManager } from '../styles'
import { ManagerDataModel } from 'modules/vacations/models/managerData.model'

export interface IApproverProps {
    manager: ManagerDataModel,
}

export const ApproverCmp: React.FC<IApproverProps> = ({manager}) => {
  return(
    <StyledItem>
      <h3>Approver</h3>

      <Tooltip
        title={<StyledLink><Avatar src={manager.photo}/> {manager.email}</StyledLink>}
        placement='right'>
        <StyledManager>{manager.fullName}</StyledManager>
      </Tooltip>
    </StyledItem>
  )
}
