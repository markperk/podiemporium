import { plays } from '../reference/plays'
import { Map } from 'immutable'

export const objToArray = obj =>
  Object.keys(obj).map(k => obj[String(k)])

/* Sort by property; Courtesy of https://bit.ly/2E7Afdy */
export const dynamicSort = property => {
  var sortOrder = 1

  if (property[0] === "-") {
    sortOrder = -1
    property = property.substr(1)
  }

  return function (a, b) {
    if (sortOrder === -1) {
      return b[property].localeCompare(a[property])
    } else {
      return a[property].localeCompare(b[property])
    }
  }
}

/* Filter by prop and remove duplicates; Courtesy of https://bit.ly/2JYB5LS */
const filterByProp = (data, prop) => {
  var seen = new Set()
  return data.filter(item =>
    !seen.has(item[prop]) && seen.add(item[prop])
  )
}

/* Returns a play based on a play id provided by a Map() review or string id */
export const getPlayByPlayId = param => {
  const playId = Map.isMap(param) ? String(param.get('play_id')) : String(param)
  return plays.get(playId)
}

export const getPlayDataByPropKey = prop => {
  const playsList = filterByProp(objToArray(plays.toJS()), prop)
  if (prop === 'year') return playsList.sort((a, b) => a.year - b.year)
  return playsList.sort(dynamicSort(prop))
}

export const joinPlayDataWithReviews = reviews => {
  return reviews.map(review => {
    const play = getPlayByPlayId(review)
    return review.merge(play)
  })
}

export const getPlayReportData = reviews => {
  return reviews.map(review => {
    return {
      rating: String(review.rating),
      title: review.title,
      words: parseFloat(review.wordCount.replace(/,/g, '')),
      speeches: parseFloat(review.speechCount),
    }
  }).sort(dynamicSort('rating'))
}