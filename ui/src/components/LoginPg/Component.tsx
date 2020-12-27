import React from 'react'
import { Button } from 'antd'

export interface ILoginPgProps{
  onLoginClick: () => void
}

export const LoginPg: React.FC<ILoginPgProps> = ({ onLoginClick }) => (
  <div style={{ height: '100vh' }}>
    <Button onClick={onLoginClick} type="primary">Login with google</Button>
  </div>
)
