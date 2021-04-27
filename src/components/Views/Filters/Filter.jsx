import React from 'react'
import PropTypes from 'prop-types'
import Chip from '../../Controls/Chip'
import { Flexbox } from '../../Layout'
import { withStyles, Typography } from '@material-ui/core'

const styles = theme => ({
  container: {
    margin: `${theme.spacing.unit}px 0`,
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
  chips: {
    marginTop: `${theme.spacing.unit / 2}px`,
    flexFlow: 'row wrap',
  },
})

const Filter = props => {
  const { classes, data, category, ...rest } = props

  return (
    <Flexbox className={classes.container}>
      <Typography className={classes.category}>
        {category}
      </Typography>
      <Flexbox className={classes.chips}>
        {data.map(item =>
          <Chip key={item.id} data={item} {...rest} />
        )}
      </Flexbox>
    </Flexbox>
  )
}

Filter.propType = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  selector: PropTypes.string.isRequired,
  useSelect: PropTypes.array.isRequired,
}

export default withStyles(styles)(Filter)