import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNavigation, StyledCircle } from './styled'

export const NavigationRequests: React.FC = () => {
  return(
    <StyledNavigation>
      <Link to=''>
        All requests
        <StyledCircle>10</StyledCircle>
      </Link>

      <Link to=''>
          Regular vacation
        <StyledCircle>4</StyledCircle>
      </Link>

      <Link to=''>
          Sick leave
        <StyledCircle>8</StyledCircle>
      </Link>
    </StyledNavigation>
  )
}
