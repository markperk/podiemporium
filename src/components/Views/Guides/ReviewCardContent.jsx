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
    fontSize: 12,
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

const ReviewCardContent = ({ classes, guides }) => {

  return (
    <CardContent classes={{ root: classes.root }}>
      <Typography className={classes.quote}>
        {guides.get('body')}
      </Typography>
    </CardContent>
  )
}

ReviewCardContent.propTypes = {
  classes: PropTypes.object.isRequired,
  guides: PropTypes.instanceOf(Map)
}

export default withStyles(styles)(ReviewCardContent)