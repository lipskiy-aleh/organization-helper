import React from 'react'
import { Comment } from './Comment'
import { Period } from './Period'
import { StyledItem,
  StyledWrapper,
  StyledLink,
  StyledManager,
} from './styles'
import { Checkbox, Button, Form, message, Tooltip, Avatar } from 'antd'
import { REQUEST_TYPE, STATUS, VacationHistoryItemModel } from '../../../models/vacationHistoryItem.model'
import { ManagerDataModel } from '../../../models/managerData.model'

export interface IRegularVacationProps {
    userName: string,
    userSurname: string,
    manager: ManagerDataModel,
    addRequest?: (data: VacationHistoryItemModel) => void,
}

export const RegularVacation: React.FC<IRegularVacationProps> = (props) => {

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
    console.log(values)
    sendRegularVacation.resetFields()
  }

  const onFinishFailed = () => {
    message.error('Oops! Something went wrong!')
  }
  const [sendRegularVacation] = Form.useForm()
  return(
    <StyledWrapper form={sendRegularVacation}
      initialValues={{ informed: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>

      <h2>New regular vacation</h2>

      <StyledItem>
        <h3>Employee</h3>
        <div>{props.userName} {props.userSurname}</div>
      </StyledItem>

      <StyledItem>
        <h3>Approver</h3>

        <Tooltip
          title={<StyledLink><Avatar src={props.manager.photo}/> {props.manager.email}</StyledLink>}
          placement='right'>
          <StyledManager>{props.manager.fullName}</StyledManager>
        </Tooltip>
      </StyledItem>

      <StyledItem>
        <h3>Period</h3>
        <Period />
      </StyledItem>

      <StyledItem>
        <h3>Duration</h3>
        <div>{4}d</div>
      </StyledItem>

      <Form.Item name="informed" valuePropName="checked">
        <Checkbox>I have informed my project/delivery managers</Checkbox>
      </Form.Item>

      <h3>Comment</h3>
      <Comment />

      <Button type="primary" htmlType="submit">Send request</Button>
    </StyledWrapper>
  )
}
