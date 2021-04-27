import { useBrix } from 'react-brix'
import { fromJS } from 'immutable'
import { paths } from '../paths'

export const useFilters = () => {
  const [genre, setGenre] = useBrix(paths.filters.genre.get())
  const [playId, setPlayId] = useBrix(paths.filters.playId.get())
  const [rating, setRating] = useBrix(paths.filters.rating.get())
  const [year, setYear] = useBrix(paths.filters.year.get())
  const range = rating && [rating.get(0), rating.get(1)]

  let filters = {}
  if (genre) filters.genre = [genre]
  if (playId) filters.play_id = [playId]
  if (year) filters.year = [year]
  if (rating) filters.rating = range

  return [
    fromJS(filters),
    {
      useGenre: [genre, setGenre],
      usePlayId: [playId, setPlayId],
      useRating: [range, setRating],
      useYear: [year, setYear],
    }
  ]
}