import React from 'react'
import { IRootState } from 'store'
import { RegularVacationCmp, IRegularVacationProps } from './Component'
import { connect } from 'react-redux'
import { getUserData } from 'selectors/user'
import { getManagerData } from 'selectors/manager'
import { addRequest } from 'modules/vacations/actions'
import { getDuration } from 'modules/vacations/selectors'

const mapStateToProps = (state: IRootState): IRegularVacationProps => ({
  userName: getUserData(state).name,
  userSurname: getUserData(state).surname,
  manager: getManagerData(state),
  duration: getDuration(state),
})

export const RegularVacation = connect(mapStateToProps,
  {addRequest})(RegularVacationCmp)
