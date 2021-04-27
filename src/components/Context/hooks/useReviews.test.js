import { fromJS } from 'immutable'
import { useBrixWorker } from 'react-brix'
import { useReviews } from './useReviews'
import { useFilters } from './useFilters'
import { getReviews } from '../workers/getReviews'

jest.mock('react')
jest.mock('react-brix')
jest.mock('../workers/getReviews')
jest.mock('./useFilters')

const mockReviews = [{
  author: "Kaley Schiller",
  body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
  id: "9783221620868",
  publish_date: "2016-09-05T23:25:47.642350Z",
  rating: 0.8,
  play_id: 1,
}]


describe('useReviews', () => {

  describe('filteredReviews && filterSetters', () => {
    let useRating, usePlayId, useGenre,
      filters, filterSetters

    beforeEach(() => {
      jest.clearAllMocks()
      filters = fromJS({
        genre: 'comedy',
      })
      useGenre = ['comedy', jest.fn()]
      usePlayId = ['1', jest.fn()]
      useRating = [[0.8, 2.0], jest.fn()]
      filterSetters = { useGenre, usePlayId, useRating }
      useFilters.mockReturnValue([filters, filterSetters])
      getReviews.mockReturnValue(mockReviews)
      useBrixWorker.mockReturnValue(fromJS(mockReviews))
    })

    test('returns an empty array of reviews', () => {
      const result = useReviews()
      expect(result).toMatchSnapshot()
    })
  })

  describe('filteredReviews match', () => {
    let useRating, usePlayId, useGenre,
      filters, filterSetters

    beforeEach(() => {
      jest.clearAllMocks()
      filters = fromJS({
        rating: [0.8, 2.0],
      })
      useGenre = ['comedy', jest.fn()]
      usePlayId = ['1', jest.fn()]
      useRating = [[0.8, 2.0], jest.fn()]
      filterSetters = { useGenre, usePlayId, useRating }
      useFilters.mockReturnValue([filters, filterSetters])
      getReviews.mockReturnValue(mockReviews)
      useBrixWorker.mockReturnValue(fromJS(mockReviews))
    })

    test('returns an array of a review and setter hooks', () => {
      const [filteredReviews] = useReviews()
      expect(filteredReviews).toEqual(fromJS(mockReviews))
    })
  })

  describe('filterCount', () => {
    let useRating, usePlayId, useGenre,
      filters, filterSetters

    beforeEach(() => {
      jest.clearAllMocks()
      filters = fromJS({
        play_id: '1',
      })
      useGenre = ['comedy', jest.fn()]
      usePlayId = ['1', jest.fn()]
      useRating = [[0.8, 2.0], jest.fn()]
      filterSetters = { useGenre, usePlayId, useRating }
      useFilters.mockReturnValue([filters, filterSetters])
      getReviews.mockReturnValue(mockReviews)
      useBrixWorker.mockReturnValue(fromJS(mockReviews))
    })

    test('returns reviews, setter fns and a filterCount', () => {
      const [filteredReviews, filterSetters, filterCount] = useReviews()
      expect(filteredReviews).toEqual(fromJS(mockReviews))
      expect(filterSetters).toMatchSnapshot()
      expect(filterCount).toEqual([1, 1])
    })
  })
})