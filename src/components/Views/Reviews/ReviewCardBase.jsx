import React from 'react'
import { Map } from 'immutable'
import PropTypes from 'prop-types'
import ThumbDown from '@material-ui/icons/ThumbDown'
import ThumbUp from '@material-ui/icons/ThumbUp'
import { formatRelative, subDays } from 'date-fns'
import {
  withStyles,
  CardHeader,
  Avatar,
  Typography,
  IconButton,
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

const ReviewCardBase = ({ classes, review, play }) => {
  const date = new Date(review.get('publish_date'))
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
          aria-label={review.get('rating')}
          style={{ backgroundColor: play.get('color') }}
        >
          {review.get('rating')}
        </Avatar>
      }
      title={
        <Typography noWrap>
          {review.get('author')}
        </Typography>
      }
      action={
        <IconButton disabled>
          {review.get('rating') > 2.5 ?
            <ThumbUp className={classes.thumb} /> :
            <ThumbDown className={classes.thumb} />
          }
        </IconButton>
      }
    />
  )
}

ReviewCardBase.propTypes = {
  classes: PropTypes.object.isRequired,
  review: PropTypes.instanceOf(Map),
  play: PropTypes.instanceOf(Map)
}

export default withStyles(styles)(ReviewCardBase)