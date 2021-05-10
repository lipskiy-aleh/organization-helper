import React from 'react'
import { Employee } from './Employee'
import { Approver } from './Approver'
import { Duration } from './Duration'
import { Comment } from './Comment'
import { Period } from './Period'
import { StyledItem,
  StyledWrapper,
} from './styles'
import { Checkbox, Button, Form, message } from 'antd'
import { REQUEST_TYPE, STATUS, VacationHistoryItemModel } from 'modules/vacations/models/vacationHistoryItem.model'
import { ManagerDataModel } from 'modules/vacations/models/managerData.model'

export interface IRegularVacationProps {
    manager: ManagerDataModel,
    addRequest?: (data: VacationHistoryItemModel) => void,
}

export const RegularVacationCmp: React.FC<IRegularVacationProps> = (props) => {
  const [sendRegularVacation] = Form.useForm()

  const onFinish = (values: any) => {
    const data: VacationHistoryItemModel = {
      type: REQUEST_TYPE.REGULAR,
      status: STATUS.IN_PROGRESS,
      reason: values.comment,
      startDate: values.period[0],
      endDate: values.period[1],
      approvedBy: props.manager.fullName,
      approveDate: null,
    }
    props.addRequest(data)
    message.success('Your regular vacation has been added!')
    sendRegularVacation.resetFields()
  }

  const onFinishFailed = () => {
    message.error('Oops! Something went wrong!')
  }

  return(
    <StyledWrapper form={sendRegularVacation}
      initialValues={{ informed: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>

      <h2>New regular vacation</h2>
      <Employee />

      <Approver />

      <StyledItem>
        <h3>Period</h3>
        <Period />
      </StyledItem>

      <Duration />

      <Form.Item name="informed" valuePropName="checked">
        <Checkbox>I have informed my project/delivery managers</Checkbox>
      </Form.Item>

      <Comment />

      <Button type="primary" htmlType="submit">Send request</Button>
    </StyledWrapper>
  )
}
