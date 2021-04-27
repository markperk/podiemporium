import { useBrix } from 'react-brix'
import { useFilters } from './useFilters'
import { List } from 'immutable'

jest.mock('react')
jest.mock('react-brix')

describe('useFilters', () => {

  describe('genre', () => {
    let useGenreMock
    beforeEach(() => {
      jest.clearAllMocks()

      // eslint-disable-next-line
      Array.prototype.get = jest.fn(x => 0)
      useGenreMock = [['tragedy'], jest.fn()]
      useBrix.mockReturnValue(useGenreMock)
    })

    test('returns filters, hooks', () => {
      const [filters, { useGenre }] = useFilters()
      expect(filters).toMatchSnapshot()
      expect(useGenre).toEqual(useGenreMock)
    })
  })

  describe('play_id', () => {
    let usePlayIdMock
    beforeEach(() => {
      jest.clearAllMocks()

      // eslint-disable-next-line 
      String.prototype.get = jest.fn(x => 0)
      usePlayIdMock = ['1', jest.fn()]
      useBrix.mockReturnValue(usePlayIdMock)
    })

    test('returns filters, hooks', () => {
      const [filters, { usePlayId }] = useFilters()
      expect(filters).toMatchSnapshot()
      expect(usePlayId).toEqual(usePlayIdMock)
    })
  })

  describe('rating', () => {
    let useRatingMock
    beforeEach(() => {
      jest.clearAllMocks()

      useRatingMock = [List([1, 2]), jest.fn()]
      useBrix.mockReturnValue(useRatingMock)
    })

    test('returns filters, hooks', () => {
      const [filters, { useRating }] = useFilters()
      const expected = JSON.stringify([[1, 2], jest.fn()])
      const result = JSON.stringify(useRating)
      expect(filters).toMatchSnapshot()
      expect(result).toEqual(expected)
    })
  })
})
