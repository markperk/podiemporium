import React from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import {
  Card,
  CardHeader,
  CardMedia,
  withStyles,
  Divider,
  Typography,
} from '@material-ui/core'
import ReviewCardBase from './ReviewCardBase'
import ReviewCardContent from './ReviewCardContent'

const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    margin: theme.spacing.unit,
    maxWidth: '400px',
  },
  media: {
    height: 0,
    opacity: 0.4,
    paddingTop: '40%',
    filter: 'alpha(opacity = 40)',
  },
  root: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  title: {
    fontSize: theme.typography.pxToRem(18),
  },
  subheader: {
    fontSize: theme.typography.pxToRem(11),
    color: theme.palette.primary.contrastText,
  },
})

const ReviewCard = ({ classes, ...rest }) => {
  const { play } = rest

  return (
    <Card
      className={classes.card}
      style={{ border: `1px solid ${play.get('color')}` }}
    >
      <CardMedia
        className={classes.media}
        image={play.get('image')}
        title={play.get('title')}
      />
      <CardHeader
        title={
          <Typography
            variant='body1'
            style={{ color: `${play.get('color')}` }}
          >
            {play.get('title')}
          </Typography>
        }
        classes={{
          root: classes.root,
          title: classes.title,
          subheader: classes.subheader,
        }}
        subheader={`
          ${play.get('year')}  |  
          ${play.get('genre')}  |  
          Words: ${play.get('wordCount')}  |  
          Speeches: ${play.get('speechCount')} 
        `}
      />
      <Divider variant="middle" />
      <ReviewCardContent {...rest} />
      <Divider variant="middle" />
      <ReviewCardBase {...rest} />
    </Card>
  )
}

ReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
  review: PropTypes.instanceOf(Map),
  play: PropTypes.instanceOf(Map),
}

export default withStyles(styles)(ReviewCard)