
export const percentFormatter = (percent: number, usedHours: number): string => {
  const days = usedHours/8

  if (Number.isInteger(days)) {
    return `${days*percent/percent}d`
  } else {
    const daysAll = Math.trunc(days)
    const hoursAll = usedHours - daysAll * 8

    return `${daysAll*percent/percent}d ${hoursAll}h`
  }
}
