
export function dataFormatter(date: string): string  {
  const options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }

  const dateFormat = Date.parse(date)

  return new Intl.DateTimeFormat('en-US', options).format(dateFormat)
}
