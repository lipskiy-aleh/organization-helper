import { IRootState } from 'store'
import { VacationInfoModel } from './models/vacationInfo.model'
import { VacationHistoryItemModel } from './models/vacationHistoryItem.model'
import { OtherVacationsModel } from './models/otherVacations.model'

export const getRegularVacation = (state: IRootState): VacationInfoModel => state.vacations.regularVacation

export const getSickVacation = (state: IRootState): VacationInfoModel => state.vacations.sickVacation

export const getOtherVacation = (state: IRootState): OtherVacationsModel => state.vacations.otherVacations

export const getHistoryVacation = (state: IRootState): VacationHistoryItemModel[] => state.vacations.history

export const getDuration = (state: IRootState): number => state.vacations.duration
