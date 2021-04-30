import React from 'react'
import { StyledNavigation, StyledCircle } from './styled'
import { VacationHistoryItemModel } from 'modules/vacations/models/vacationHistoryItem.model'

export interface INavigationRequestsProps {
    history: VacationHistoryItemModel[]
}

export const NavigationRequests: React.FC<INavigationRequestsProps> = ({history}) => {
  const regular = history.filter(request => request.type === 'regular').length
  const sick = history.filter(request => request.type === 'sick').length

  return(
    <StyledNavigation>
      <div>
        All requests
        <StyledCircle>{history.length}</StyledCircle>
      </div>

      <div>
          Regular vacation
        <StyledCircle>{regular}</StyledCircle>
      </div>

      <div>
          Sick leave
        <StyledCircle>{sick}</StyledCircle>
      </div>
    </StyledNavigation>
  )
}
