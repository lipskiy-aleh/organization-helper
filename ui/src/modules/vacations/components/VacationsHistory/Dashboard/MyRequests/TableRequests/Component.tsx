import React from 'react'
import { RegularVacation } from './RegularVacation'
import { StylesTable } from './styles'
import {SickLeave} from './SickLeave'

export const TableRequests: React.FC = () => {
  return (
    <StylesTable>
      <h4>REQUEST TYPE</h4>
      <h4>REASON</h4>
      <h4>STATUS</h4>
      <h4>PERIOD</h4>
      <h4>APPROVED</h4>

      <RegularVacation />

      <SickLeave />

    </StylesTable>
  )
}
