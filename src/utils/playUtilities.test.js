import { fromJS } from 'immutable'
import {
  dynamicSort,
  getPlayByPlayId,
  getPlayReportData,
  getPlayDataByPropKey,
  joinPlayDataWithReviews,
} from './playUtilities'

describe('playUtilities', () => {

  describe('dynamicSort', () => {
    it('transforms list of data into new js map for reporting', () => {
      const list = [
        { rating: '1', wordCount: '5,345', speechCount: 345, title: 'two' },
        { rating: '2', wordCount: '8,558', speechCount: 345, title: 'one' },
      ]
      const result = list.sort(dynamicSort('title'))
      expect(result).toMatchSnapshot()
    })
  })

  describe('getPlayByPlayId', () => {
    it('returns the play based on the play_id given', () => {
      const mockReview = fromJS({
        play_id: 2
      })
      const result = getPlayByPlayId(mockReview)
      const expected = fromJS({
        "id": 2,
        "title": "Antony and Cleopatra",
        "wordCount": "24,905",
        "speechCount": "1,361",
        "genre": "Tragedy",
        "year": 1606,
        "image": "https://www.dropbox.com/s/bnrkj5o5wz68us6/2.png?raw=1",
        "color": "#2e9d75"
      })
      expect(result).toEqual(expected)
    })
  })

  describe('getPlayDataByPropKey', () => {

    it('returns an array of objects with one value of the given prop', () => {
      const result = getPlayDataByPropKey('genre')
      expect(result).toMatchSnapshot()
    })
  })


  describe('joinPlayDataWithReviews', () => {

    it('joins a map of data with another map and returns a list', () => {
      const listExample = fromJS([{ test: '1', play_id: 5 }, { test: '2', play_id: 8 }])
      const result = joinPlayDataWithReviews(listExample)
      expect(result).toMatchSnapshot()
    })
  })

  describe('getPlayReportData', () => {
    it('transforms list of data into new js map for reporting', () => {
      const listExample = [
        { rating: '1', wordCount: '5,345', speechCount: 345, title: 'it' },
        { rating: '2', wordCount: '8,558', speechCount: 345, title: 'it' },
      ]
      const result = getPlayReportData(listExample)
      expect(result).toMatchSnapshot()
    })
  })
})