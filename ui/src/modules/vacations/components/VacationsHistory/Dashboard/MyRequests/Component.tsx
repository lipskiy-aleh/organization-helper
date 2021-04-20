import * as React from 'react'
import { Link } from 'react-router-dom'
import { NavigationRequests } from './NavigationRequests'
import { TableRequests } from './TableRequests'

import { StyledRequests } from './styled'

export const MyRequests: React.FC = () => {

  return (
    <div style={{padding: '20px'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span>My Requests</span>
        <Link to='#' >Go to all Requests</Link>
      </div>

      <StyledRequests>
        <NavigationRequests />

        <TableRequests />
      </StyledRequests>
    </div>
  )
}
