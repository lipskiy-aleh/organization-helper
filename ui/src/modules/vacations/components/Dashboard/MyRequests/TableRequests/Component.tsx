import React from 'react'
import { RegularVacation } from './RegularVacation'
import {SickLeave} from './SickLeave'
import { VacationHistoryItemModel, REQUEST_TYPE } from 'modules/vacations/models/vacationHistoryItem.model'
import { StylesTable } from './styles'

export interface ITableRequestsProps {
    history: VacationHistoryItemModel[]
}

export const TableRequests: React.FC<ITableRequestsProps> = ({history}) => {
  return (
    <StylesTable>
      <h4>REQUEST TYPE</h4>
      <h4>REASON</h4>
      <h4>STATUS</h4>
      <h4>PERIOD</h4>
      <h4>APPROVED</h4>
      <h4> </h4>

      {history.map(request => {
        if(request.type === REQUEST_TYPE.REGULAR) {
          return <RegularVacation {...request}/>
        } else if (request.type === REQUEST_TYPE.SICK) {
          return <SickLeave {...request}/>
        }
      })}
    </StylesTable>
  )
}
