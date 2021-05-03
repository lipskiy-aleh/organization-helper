import React from 'react'
import { MenuSubmit } from './MenuSubmit'
import { Balance } from './Balance'
import { RegularVacation } from './RegularVacation'

import { StyledWrapper } from './styles'

export const SubmitVacation:React.FC = () => {
  return (
    <StyledWrapper>
      <MenuSubmit />
      <RegularVacation />
      <Balance />
    </StyledWrapper>

  )
}


