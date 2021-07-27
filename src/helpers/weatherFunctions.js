import { BASE_URL_IMG } from '../constants'

export const setIconUrl = (icon) => `${BASE_URL_IMG}/${icon}@2x.png`

export const setTime = (time) => {
  return new Date(time * 1000).toLocaleTimeString().slice(0, 5)
}

export const setWeekDayNameShort = (time) => {
  return new Date(time * 1000).toLocaleString('en-US', { weekday: 'short' })
}

export const toTextualDescription = (degree) => {
  if (degree > 337.5) return 'Northerly'
  if (degree > 292.5) return 'North Westerly'
  if (degree > 247.5) return 'Westerly'
  if (degree > 202.5) return 'South Westerly'
  if (degree > 157.5) return 'Southerly'
  if (degree > 122.5) return 'South Easterly'
  if (degree > 67.5) return 'Easterly'
  if (degree > 22.5) {
    return 'North Easterly'
  }
  return 'Northerly'
}
