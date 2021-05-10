import React from 'react'
import { VacationHistoryItemModel, STATUS } from 'modules/vacations/models/vacationHistoryItem.model'
import { Approved, Cancel, InProgress } from 'components/requestType'
import { Approver } from '../Approver'
import { dataFormatter } from 'utils/dataFormatter'
import { Setting } from '../Setting'

export const RegularVacation: React.FC<VacationHistoryItemModel> = (props) => {
  return (
    <>
      <div>Regular vacation</div>

      <div>{props.reason}</div>

      <div>
        {props.status === STATUS.APPROVED && <Approved />}
        {props.status === STATUS.CANCELED && <Cancel />}
        {props.status === STATUS.IN_PROGRESS && <InProgress />}
      </div>

      <div>{dataFormatter(props.startDate)} - {dataFormatter(props.endDate)}</div>
      <Approver />

      <Setting/>
    </>
  )
}
