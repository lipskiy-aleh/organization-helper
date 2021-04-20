import * as React from 'react'
import {Overview} from './Overview'
import {MyRequests} from './MyRequests'

export const Dashboard:React.FC = () => {
  return (
    <>
      <Overview />

      <MyRequests />
    </>

  )
}
