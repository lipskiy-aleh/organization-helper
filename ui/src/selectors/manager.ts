import { IRootState } from 'store'
import { ManagerDataModel } from 'modules/vacations/models/managerData.model'

export const getManagerData = (state: IRootState): ManagerDataModel => state.manager
