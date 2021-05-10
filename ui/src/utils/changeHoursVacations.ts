
export const changeHoursVacations = (hours: number): string => {
  const days = hours/8

  if (Number.isInteger(days)) {
    return `${days}d`
  } else {
    const daysAll = Math.trunc(days)
    const hoursAll = hours - daysAll * 8

    return `${daysAll}d ${hoursAll}h`
  }
}
