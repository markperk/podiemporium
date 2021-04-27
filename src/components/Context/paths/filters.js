export const filters = {
  _: 'filters',
  get: () => [filters._],
  year: {
    get: () => [filters._, 'year'],
  },
  genre: {
    get: () => [filters._, 'genre'],
  },
  rating: {
    get: () => [filters._, 'rating'],
  },
  playId: {
    get: () => [filters._, 'play_id'],
  },
}