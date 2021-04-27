import { List } from 'immutable'
import { useBrixWorker } from 'react-brix'
import { paths } from '../paths'
import { getReviews } from '../workers'
import { useFilters } from '../hooks'
import { filterBy } from '../../../utils'

export const useReviews = () => {
  const [filters, filterSetters] = useFilters()

  const worker = async () => {
    try {
      return await getReviews()
    }
    catch (error) {
      console.error(error)
    }
  }

  const reviews = useBrixWorker(paths.reviews.get(), worker, List())
  const filteredReviews = filterBy(reviews, filters)
  const filterCount = [filteredReviews.size, reviews.size]

  return [
    filteredReviews,
    filterSetters,
    filterCount,
  ]
}