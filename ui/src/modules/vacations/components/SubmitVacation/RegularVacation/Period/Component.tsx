import React from 'react'
import { VacationInfoModel } from 'modules/vacations/models/vacationInfo.model'
import { Form, DatePicker } from 'antd'
import * as moment from 'moment'

export interface IPeriodProps {
  regularVacation: VacationInfoModel,
}

export const PeriodCmp: React.FC<IPeriodProps> = (props) => {
  const dayCanTake = Math.trunc((props.regularVacation.totalHours - props.regularVacation.usedHours)/8)

  const disabledDate = (current: any) => {
    return current && current < moment().endOf('day')
  }

  const rule = (_: any, value: any) => {
    const duration = (value[1]-value[0])/ (60 * 60 * 24 * 1000) + 1
    return duration > dayCanTake
      ? Promise.reject(new Error('You can not take more day, than you have!'))
      :  Promise.resolve()
  }

  return (
    <Form.Item name="period" style={{marginBottom: '0'}}
      rules={ [{ validator: rule }] }>
      <DatePicker.RangePicker
        disabledDate={disabledDate}/>
    </Form.Item>
  )
}
