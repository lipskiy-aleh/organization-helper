import React from 'react'
import { Button } from 'antd'

export const PrimaryButton: React.FC = (props) => (
  <Button type="primary">{props.children}</Button>
)
