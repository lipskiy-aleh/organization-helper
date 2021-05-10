import React, {useEffect} from 'react'
import { Logo } from './Logo'
import { StyledHeader } from './styles'
import { CurrentUser } from './CurrentUser'
import { HeaderMenu } from './Menu'
import { useDispatch } from 'react-redux'
import { fetchUser } from 'actions/user.actions'
import { fetchManager } from 'actions/manager.actions'

export const Header: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchManager())
  }, [])

  return (
    <StyledHeader>
      <div style={{display: 'flex'}}>
        <Logo/>
        <HeaderMenu />
      </div>
      <CurrentUser />
    </StyledHeader>
  )
}
