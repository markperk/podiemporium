import { api } from '../actions'

const assignPlayId = reviews => reviews.map(review => {
  review.play_id = Math.floor(Math.random() * 37) + 1
  return review
})

export const getReviews = async () => {
  return await api.get('/reviews').then(reviews => assignPlayId(reviews))
}