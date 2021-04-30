import React from 'react'
import { Input, Form } from 'antd'

const { TextArea } = Input

export const Comment: React.FC = () => {
  return (
    <Form.Item name="comment">
      <TextArea rows={2} placeholder={'Add comment'}/>
    </Form.Item>
  )
}
