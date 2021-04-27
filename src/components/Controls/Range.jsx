import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Flexbox } from '../Layout'
import { withStyles, Typography } from '@material-ui/core'
import { Range as RcRange } from 'rc-slider'
import 'rc-slider/assets/index.css'

const styles = theme => ({
  container: {
    margin: `0 0 ${theme.spacing.unit}px`,
    padding: `0 0 ${theme.spacing.unit * 2}px`,
  },
  category: {
    fontSize: theme.typography.pxToRem(12),
    width: `${theme.spacing.unit * 8}px`,
    color: theme.palette.grey[700],
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  range: {
    flexGrow: 1,
    marginTop: theme.spacing.unit / 2,
    marginLeft: theme.spacing.unit * 2,
    maxWidth: '600px',
    minWidth: '100px',
    alignItems: 'center',
  }
})

const Range = ({ classes, extents, marks, category, useSelect }) => {
  const [rating, setRating] = useSelect
  const [range, setRange] = useState(rating)
  const [min, max] = extents

  useEffect(() => {
    if (rating === undefined) setRange(rating)
  }, [rating, setRange])

  const handleChange = ([min, max]) => {
    const value = [+min.toFixed(1), +max.toFixed(1)]
    setRange(value)
    setRating(value)
  }

  return (
    <Flexbox className={classes.container}>
      <Typography className={classes.category}>
        {category}
      </Typography>
      <Flexbox className={classes.range}>
        <RcRange
          marks={marks}
          min={min}
          max={max}
          step={0.1}
          pushable={0.1}
          value={range || extents}
          onChange={handleChange}
          trackStyle={[{ backgroundColor: '#B3E6FF' }]}
        />
      </Flexbox>
    </Flexbox>
  )
}

Range.propTypes = {
  classes: PropTypes.object.isRequired,
  extents: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  marks: PropTypes.object.isRequired,
  useSelect: PropTypes.array.isRequired,
}

export default withStyles(styles)(Range)