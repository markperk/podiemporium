import { fromJS } from 'immutable'
import { filterBy } from "./utilities.js"

const mockReviews = fromJS([
  {
    author: "Kaley Schiller",
    body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    id: "9783221620868",
    play_id: 10,
    publish_date: "2016-09-05T23:25:47.642350Z",
    rating: 0.8,
  },
  {
    author: "Wilma Mosciski",
    body: "For ever and a day.",
    id: "9785222574737",
    play_id: 18,
    publish_date: "2016-08-23T23:25:47.645347Z",
    rating: 2.2,
  },
  {
    author: "Wilma Mosciski",
    body: "For ever and a day.",
    id: "9785222574737",
    play_id: 12,
    publish_date: "2016-08-23T23:25:47.645347Z",
    rating: 2.2,
  },
])


describe('utilties', () => {

  describe('filterBy', () => {

    it('filters an array of reviews, including play data', () => {
      const arr = mockReviews
      const filters = fromJS({
        genre: 'Comedy',
      })
      const expected = fromJS([mockReviews.get(1)])
      expect(filterBy(arr, filters)).toEqual(expected)
    })

    it('returns data if there are no filters', () => {
      const arr = mockReviews
      const filters = fromJS({})
      expect(filterBy(arr, filters)).toEqual(mockReviews)
    })
  })
})
