import React from 'react'
import { Map } from 'immutable'
import PropTypes from 'prop-types'
import { formatRelative, subDays } from 'date-fns'
import {
  withStyles,
  CardHeader,
  Avatar,
  Typography,
} from '@material-ui/core'

const styles = theme => ({
  root: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  action: {
    alignSelf: 'center',
    margin: 0,
  },
  title: {
    color: theme.palette.grey[800],
    fontSize: theme.typography.pxToRem(18),
  },
  thumb: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.grey[500],
  },
  subheader: {
    fontSize: theme.typography.pxToRem(11),
  },
  overflow: {
    overflow: 'hidden',
  }
})

const ReviewCardBase = ({ classes, guides }) => {
  console.log('guides card base', guides)
  const date = new Date(guides.get('publish_date'))
  const publishDate = formatRelative(subDays(date, 3), date)

  return (
    <CardHeader
      subheader={publishDate}
      classes={{
        root: classes.root,
        action: classes.action,
        title: classes.title,
        subheader: classes.subheader,
        content: classes.overflow,
      }}
      avatar={
        <Avatar
          aria-label={guides.get('rating')}
          style={{ backgroundColor: 'gray' }}
        >
          P
        </Avatar>
      }
      title={
        <Typography noWrap>
          {guides.get('author')}
        </Typography>
      }
    />
  )
}

ReviewCardBase.propTypes = {
  classes: PropTypes.object.isRequired,
  guides: PropTypes.instanceOf(Map)
}

export default withStyles(styles)(ReviewCardBase)