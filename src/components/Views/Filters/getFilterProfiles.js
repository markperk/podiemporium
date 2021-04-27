import React from 'react'
import { getPlayDataByPropKey } from '../../../utils'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'

export const getFilterProfiles = filterSetters => {
  const { useRating, useGenre, usePlayId, useYear } = filterSetters
  const thumbStyle = { color: '#a6a6a6', fontSize: 14 }

  const byRating = {
    category: 'By Rating',
    label: 'rating',
    extents: [0, 5],
    marks: {
      0: <ThumbDown style={thumbStyle} />,
      1: 1, 2: 2,
      2.5: '',
      3: 3, 4: 4,
      5: <ThumbUp style={thumbStyle} />
    },
    useSelect: useRating,
  }

  const byGenre = {
    data: getPlayDataByPropKey('genre'),
    category: 'By Genre',
    label: 'genre',
    selector: 'genre',
    useSelect: useGenre,
  }

  const byTitle = {
    data: getPlayDataByPropKey('title'),
    category: 'By Title',
    label: 'title',
    selector: 'id',
    useSelect: usePlayId,
  }

  const byYear = {
    data: getPlayDataByPropKey('year'),
    category: 'By Year',
    label: 'year',
    selector: 'year',
    useSelect: useYear,
  }

  return {
    byRating,
    byGenre,
    byTitle,
    byYear,
  }
}