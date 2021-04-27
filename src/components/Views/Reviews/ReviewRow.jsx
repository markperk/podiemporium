import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Flexbox } from '../../Layout'
import { getPlayByPlayId } from '../../../utils'
import ReviewCard from './ReviewCard'

const styles = theme => ({
  row: {
    padding: `${theme.spacing.unit}px 0`,
    justifyContent: 'space-evenly',
  }
})

const CardRow = ({ data, index, style }) => {
  const { classes, cardsPerRow, reviews } = data
  const cards = []
  const fromIndex = index * cardsPerRow
  const toIndex = Math.min(fromIndex + cardsPerRow, reviews.size)

  for (let i = fromIndex; i < toIndex; i++) {
    const play = getPlayByPlayId(reviews.get(i))
    cards.push(
      <ReviewCard
        key={i}
        review={reviews.get(i)}
        play={play}
      />
    )
  }

  return (
    <Flexbox className={classes.row} style={style}>
      {cards}
    </Flexbox>
  )
}

CardRow.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
}

export default withStyles(styles)(CardRow)