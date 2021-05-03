import { connect } from 'react-redux'
import { IRootState } from 'store'
import { getUserData } from 'selectors/user'
import { CurrentUserCmp, IUserPhotoProps } from './Component'

const mapStateToProps = (state: IRootState): IUserPhotoProps => ({
  userPhoto: getUserData(state).photo,
})

export const CurrentUser = connect(mapStateToProps)(CurrentUserCmp)

