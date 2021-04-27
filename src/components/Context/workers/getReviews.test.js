import { api } from '../actions/fetch'
import { getReviews } from './getReviews'

jest.mock('../actions/fetch')

const mockReviews = [{
  author: "Kaley Schiller",
  body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
  id: "9783221620868",
  play_id: 1,
  publish_date: "2016-09-05T23:25:47.642350Z",
  rating: 0.8,
}]

const { get } = api

describe('getReviews', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    global.Math.random = () => 1
    get.mockImplementation(() => {
      return new Promise(resolve => {
        resolve(mockReviews)
      })
    })

  })

  test('returns array of reviews and adds a random play_id to the review object', async () => {
    const result = await getReviews()
    expect(result).toMatchSnapshot()
  })
})