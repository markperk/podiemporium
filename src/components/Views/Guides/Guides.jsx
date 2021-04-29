import React from 'react'
import { List } from 'immutable'
import PropTypes from 'prop-types'
import memoize from 'memoize-one'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as GridList } from 'react-window'
import { Flexbox } from '../../Layout'
import { withStyles } from '@material-ui/core'
import ReviewRow from './GuidesRow'
import ReviewsNone from './ReviewsNone'

const CARD_HEIGHT = 400
const CARD_WIDTH = 300

const styles = theme => ({
  fill: {
    flexDirection: 'column',
    flex: 1,
  }
})

const Guides = ({ classes, guides }) => {

  const getCardData = memoize((classes, cardsPerRow, guides) => ({
    classes, cardsPerRow, guides
  }))

  return (
    <Flexbox className={classes.fill}>
      {guides.size > 0 ?
        (
          <AutoSizer>
            {({ height, width }) => {
              const cardsPerRow = Math.floor(width / CARD_WIDTH) || 1
              const rowCount = Math.ceil(guides.size / cardsPerRow)
              const cardData = getCardData(classes, cardsPerRow, guides)

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

Guides.propTypes = {
  classes: PropTypes.object.isRequired,
  guides: PropTypes.instanceOf(List),
}

export default withStyles(styles)(Guides)