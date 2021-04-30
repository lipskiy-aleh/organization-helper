import React from 'react'
import { ManagerDataModel } from 'modules/vacations/models/managerData.model'
import { Avatar } from 'antd'

export interface IApproverProps {
    managerData: ManagerDataModel
}

export const ApproverCmp: React.FC<IApproverProps> = ({managerData}) => {
  return (
    <div>
      <Avatar src={managerData.photo} style={{marginRight: '8px'}}/>
      <span>{managerData.fullName}</span>
    </div>
  )
}
