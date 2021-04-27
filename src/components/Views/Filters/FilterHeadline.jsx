import React from 'react'
import PropTypes from 'prop-types'
import { Flexbox } from '../../Layout'
import { getPlayByPlayId } from '../../../utils'
import { withStyles, Chip } from '@material-ui/core'

const styles = theme => ({
  container: {
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexFlow: 'row wrap',
      justifyContent: 'center',
    },
  },
  chips: {
    marginLeft: theme.spacing.unit,
    fontSize: theme.typography.pxToRem(10),
    height: theme.typography.pxToRem(24),
    [theme.breakpoints.down('sm')]: {
      margin: `${theme.spacing.unit / 2}px`,
    },
  },
  deleteIcon: {
    fontSize: theme.typography.pxToRem(20),
  }
})

const getLabel = (useType, value) => {
  let label
  switch (useType) {
    case 'usePlayId':
      const play = getPlayByPlayId(value)
      label = `Title: ${play.get('title')}`
      break
    case 'useRating':
      const [min, max] = value
      label = `Ratings: ${min} - ${max}`
      break
    case 'useYear':
      label = `Year: ${value}`
      break
    default:
      label = `Genre: ${value}`
  }
  return label
}

const FilterHeadline = ({ classes, filterSetters }) => {

  const renderChips = () =>
    Object.entries(filterSetters)
      .map((filterEntry, i) => {
        const [useType, [value, setValue]] = filterEntry

        return !!value ? (
          <Chip
            key={i}
            label={getLabel(useType, value)}
            onDelete={() => setValue(undefined)}
            className={classes.chips}
            classes={{ deleteIcon: classes.deleteIcon }}
          />
        ) : null
      })

  return (
    <Flexbox className={classes.container}>
      {renderChips()}
    </Flexbox>
  )
}

FilterHeadline.propTypes = {
  classes: PropTypes.object.isRequired,
  filterSetters: PropTypes.object.isRequired,
}

export default withStyles(styles)(FilterHeadline)