import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'components/Card'

import { StyledContainerCards, StyledOverview } from './styles'
import {Progress} from 'antd'

export const Overview: React.FC = () => {

  return (
    <StyledOverview>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span>Overview</span>
        <Link to='#' >Go to Balances</Link>
      </div>

      <StyledContainerCards>
        <Card title={'Regular vacation'}>
          <Progress type="circle" strokeColor='#5cafff' status='normal'
            percent={15} format={percent => `${percent}d 1h`}

          />
        </Card>

        <Card title={'Sick leave'}>
          <Progress type="circle" strokeColor='#5cafff' status='normal'
            percent={1} format={percent => `${percent}d`} />
        </Card>

        <Card title={'Overtime Leave'}>
          <Progress type="circle" strokeColor='#5cafff' status='normal'
            percent={100} format={percent => `${(6*percent)/100}d`} />
        </Card>
      </StyledContainerCards>

    </StyledOverview>
  )
}
