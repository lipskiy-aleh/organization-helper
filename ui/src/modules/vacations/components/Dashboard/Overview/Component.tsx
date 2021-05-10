import React from 'react'
import { Link } from 'react-router-dom'
import { CardRegularVacation } from './CardRegularVacation'
import { CardSickLeave } from './CardSickLeave'
import { CardOvertimeLeave } from './CardOvertimeLeave'

import { StyledContainerCards, StyledOverview } from './styles'

export const Overview: React.FC = () => {
  return (
    <StyledOverview>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span>Overview</span>
        <Link to='/vacations/balances'>Go to Balances</Link>
      </div>

      <StyledContainerCards>
        <CardRegularVacation />
        <CardSickLeave />
        <CardOvertimeLeave />
      </StyledContainerCards>
    </StyledOverview>
  )
}
