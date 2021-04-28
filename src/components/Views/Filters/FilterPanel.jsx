import React from 'react'
import PropTypes from 'prop-types'
import FilterIcon from '@material-ui/icons/Tune'
import Filter from './Filter'
import FilterHeadline from './FilterHeadline'
import { getFilterProfiles } from './getFilterProfiles'
import { Flexbox } from '../../Layout'
import { Range } from '../../Controls'
import {
  withStyles,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Divider,
  Typography,
} from '@material-ui/core'

const styles = theme => ({
  container: {
    flexDirection: 'column',
  },
  root: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: 'transparent',
    maxHeight: theme.typography.pxToRem(400),
    overflow: 'auto',
  },
  heading: {
    minWidth: '210px',
    color: theme.palette.grey[700],
  },
  padding: {
    padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit * 3}px`,
  },
  content: {
    flexDirection: 'column',
    background: theme.overrides.appBarBackgroundColor,
  },
  panelHeight: {
    minHeight: '48px !Important',
  },
  panelContent: {
    margin: `${theme.spacing.unit * 1.5}px 0 !Important`,
    [theme.breakpoints.down('sm')]: {
      flexFlow: 'row wrap',
      justifyContent: 'center',
    },
  },
  icon: {
    transition: 'none',
    transform: 'inherit',
    position: 'inherit'
  },
  expanded: {
    color: theme.palette.primary.main,
    transform: 'inherit !Important'
  },
  filter: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
})

const FilterPanel = props => {
  const { classes, filterCount, filterSetters } = props
  const { byRating, byGenre, byTitle, byYear } = getFilterProfiles(filterSetters)
  const [count, totalCount] = filterCount

  return (
    <Flexbox className={classes.container}>
      <ExpansionPanel
        classes={{ expanded: classes.panelHeight }}
        className={classes.root}
      >
        <ExpansionPanelSummary
          expandIcon={<FilterIcon classes={{ root: classes.filter }} />}
          aria-controls="filterPanel"
          id="filterPanel"
          classes={{
            root: classes.panelHeight,
            content: classes.panelContent,
            expanded: classes.expanded,
            expandIcon: classes.icon,
          }}
        >
          <Typography className={classes.heading} variant='button'>
            {`Filters (${count} / ${totalCount} Apps) `}
          </Typography>
          <FilterHeadline filterSetters={filterSetters} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          classes={{ root: classes.padding }}
          className={classes.content}
        >
          <Range {...byRating} />
          <Divider />
          <Filter {...byGenre} />
          <Divider />
          <Filter {...byTitle} />
          <Divider />
          <Filter {...byYear} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Flexbox >
  )
}

FilterPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  filterCount: PropTypes.array.isRequired,
  filterSetters: PropTypes.object.isRequired,
}

export default withStyles(styles)(FilterPanel)
