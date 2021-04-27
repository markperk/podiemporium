import { List } from 'immutable'
import { getPlayByPlayId } from './playUtilities'

const match = (value, filterValue) => filterValue.includes(value)
const range = (value, [min, max]) => +value >= min && +value <= max

/* Filter Immutable List by Immutable Map of Filters; Modified but inspired by https://bit.ly/2HAmbd0 */
export const filterBy = (data, filters) => {
  if (!filters.size) return data
  const keys = filters.keySeq()

  return data.filter(datum => {
    const play = getPlayByPlayId(datum)
    const datumWithDetails = datum.merge(play)

    /* Returns boolean if selected filter item matches value on full datum */
    return keys.every(key => {
      const filterValue = filters.get(key, List())
      const value = datum.get(key) || datumWithDetails.get(key)
      if (filterValue.size === 0) return true
      if (key === 'rating') return range(value, filterValue)
      return match(value, filterValue)
    })
  })
}