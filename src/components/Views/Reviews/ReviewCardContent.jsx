import React from 'react'
import { Map } from 'immutable'
import PropTypes from 'prop-types'
import {
  withStyles,
  CardContent,
  Typography,
} from '@material-ui/core'

const styles = theme => ({
  root: {
    maxHeight: '200px',
    minHeight: '72px',
    overflow: 'auto',
    flexGrow: 1,
  },
  quote: {
    position: 'relative',
    paddingLeft: '1em',
    borderLeft: `0.3em solid ${theme.palette.grey[200]}`,
    fontSize: 18,
    color: theme.overrides.quoteText,
    lineHeight: '20px',
    fontWeight: 300,
    '&:before, &:after': {
      content: '\\201C',
      color: `${theme.palette.grey[700]}`,
    },
    '&:after': {
      content: '\\201D',
    },
  },
})

const ReviewCardContent = ({ classes, review }) => {

  return (
    <CardContent classes={{ root: classes.root }}>
      <Typography className={classes.quote}>
        {review.get('body')}
      </Typography>
    </CardContent>
  )
}

ReviewCardContent.propTypes = {
  classes: PropTypes.object.isRequired,
  review: PropTypes.instanceOf(Map)
}

export default withStyles(styles)(ReviewCardContent)