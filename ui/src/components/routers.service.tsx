import { Redirect } from 'react-router-dom'
import { DEFAULT_ROUTE } from 'app-constants'
import React from 'react'

export interface IRoute {
    key: number
    path: string
    isExact?: boolean
    title: string
    component: React.FC
}

export const routers: Array<IRoute> = [{
  key: 1,
  path: '/',
  isExact: true,
  title: 'Vacation',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,react/display-name
  component: () => <Redirect to={DEFAULT_ROUTE} />,
},
{
  key: 2,
  path: '/budgets',
  title: 'Budgets',
  // eslint-disable-next-line react/display-name
  component: () => <div>Budgets</div>,
},
{
  key: 3,
  path: '/about',
  title: 'About',
  // eslint-disable-next-line react/display-name
  component: () => <div>About</div>,
},
]
