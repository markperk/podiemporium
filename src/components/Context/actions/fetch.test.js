import { api } from './fetch'
const { REACT_APP_BASE_URL } = process.env

describe('fetch', () => {

  const mockReview = [{
    author: "Kaley Schiller",
    body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    id: "9783221620868",
    publish_date: "2016-09-05T23:25:47.642350Z",
    rating: 0.8,
  }]

  describe('api.get', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(() => {
        return new Promise(resolve => {
          resolve({
            ok: true,
            json: () => mockReview,
          })
        })
      })
    })

    test('fetches data with expected url and returns an array of reviews in json', async () => {
      const response = await api.get('/reviews')
      const headers = {
        "headers": {
          "map": {
            "accept": "application/json",
            "content-type": "application/json",
            "x-api-key": "undefined"
          }
        },
        "method": "GET"
      }
      const url = `${REACT_APP_BASE_URL}/api/reviews`
      expect(global.fetch).toHaveBeenCalledWith(url, headers)
      expect(response).toEqual(mockReview)
    })
  })
})