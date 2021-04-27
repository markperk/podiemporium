import React from 'react'
import { List } from 'immutable'
import PropTypes from 'prop-types'
import memoize from 'memoize-one'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as GridList } from 'react-window'
import { Flexbox } from '../../Layout'
import { withStyles } from '@material-ui/core'
import ReviewRow from './ReviewRow'
import ReviewsNone from './ReviewsNone'

const CARD_HEIGHT = 400
const CARD_WIDTH = 300

const styles = theme => ({
  fill: {
    flexDirection: 'column',
    flex: 1,
  }
})

const Reviews = ({ classes, reviews }) => {

  const getCardData = memoize((classes, cardsPerRow, reviews) => ({
    classes, cardsPerRow, reviews
  }))

  return (
    <Flexbox className={classes.fill}>
      {reviews.size > 0 ?
        (
          <AutoSizer>
            {({ height, width }) => {
              const cardsPerRow = Math.floor(width / CARD_WIDTH) || 1
              const rowCount = Math.ceil(reviews.size / cardsPerRow)
              const cardData = getCardData(classes, cardsPerRow, reviews)

              return (
                <div>
                  <GridList
                    width={width}
                    height={height}
                    itemData={cardData}
                    itemCount={rowCount}
                    itemSize={CARD_HEIGHT}
                  >
                    {ReviewRow}
                  </GridList>
                </div>
              )
            }}
          </AutoSizer>
        )
        :
        (
          <ReviewsNone />
        )
      }
    </Flexbox>
  )
}

Reviews.propTypes = {
  classes: PropTypes.object.isRequired,
  reviews: PropTypes.instanceOf(List),
}

export default withStyles(styles)(Reviews)