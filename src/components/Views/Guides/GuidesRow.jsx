import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Flexbox } from '../../Layout'
import GuidesCard from './GuidesCard'

const styles = theme => ({
  row: {
    padding: `${theme.spacing.unit}px 0`,
    justifyContent: 'space-evenly',
  }
})

const GuidesRow = ({ data, index, style }) => {
  const { classes, cardsPerRow, guides } = data
  const cards = []
  const fromIndex = index * cardsPerRow
  const toIndex = Math.min(fromIndex + cardsPerRow, guides.size)

  for (let i = fromIndex; i < toIndex; i++) {
    cards.push(
      <GuidesCard
        key={i}
        guides={guides.get(i)}
      />
    )
  }

  return (
    <Flexbox className={classes.row} style={style}>
      {cards}
    </Flexbox>
  )
}

GuidesRow.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
}

export default withStyles(styles)(GuidesRow)