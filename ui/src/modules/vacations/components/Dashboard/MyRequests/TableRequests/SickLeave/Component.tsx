import React from 'react'
import { Approved, Cancel, InProgress } from 'components/requestType'
import { STATUS, VacationHistoryItemModel } from 'modules/vacations/models/vacationHistoryItem.model'
import { Approver } from '../Approver'
import { dataFormatter } from 'utils/dataFormatter'
import { Setting } from '../Setting'

export const SickLeave: React.FC<VacationHistoryItemModel> = (props) => {
  return (
    <>
      <div>Sick leave</div>
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
