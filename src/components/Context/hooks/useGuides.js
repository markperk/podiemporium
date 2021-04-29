import { List } from 'immutable'
import { useBrixWorker } from 'react-brix'
import { paths } from '../paths'
import { getGuides } from '../workers'
import { useFilters } from '.'
import { filterBy } from '../../../utils'

export const useGuides = () => {
  const [filters, filterSetters] = useFilters()

  const worker = async () => {
    try {
      return await getGuides()
    }
    catch (error) {
      console.error(error)
    }
  }

  const guides = useBrixWorker(paths.guides.get(), worker, List())
  const filteredGuides = filterBy(guides, filters)
  const filterCount = [filteredGuides.size, guides.size]

  return [
    filteredGuides,
    filterSetters,
    filterCount,
  ]
}