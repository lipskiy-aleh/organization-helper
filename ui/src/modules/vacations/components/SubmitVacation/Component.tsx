import React from 'react'
import { MenuSubmit } from './MenuSubmit'
import { BalanceContainer } from './Balance'
import { RegularVacationConnected } from './RegularVacation'

import { StyledWrapper } from './styles'

export const SubmitVacation:React.FC = () => {
  return (
    <StyledWrapper>

      <MenuSubmit />

      <RegularVacationConnected />

      <BalanceContainer />
    </StyledWrapper>

  )
}


