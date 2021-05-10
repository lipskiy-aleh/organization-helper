import { IRootState } from 'store'
import { UserDataModel } from 'modules/vacations/models/userData.model'

export const getUserData = (state: IRootState): UserDataModel => state.user
