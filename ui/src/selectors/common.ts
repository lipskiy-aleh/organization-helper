import { IRootState } from 'store'

export const getIsLogged = (state: IRootState): boolean => state.common.isLogged
