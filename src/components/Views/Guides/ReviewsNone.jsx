import React from 'react'
import PropTypes from 'prop-types'
import { Flexbox } from '../../Layout'
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  Divider
} from '@material-ui/core'

const typeColor = { color: '#616161' }
const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
  },
  border: {
    border: `1px solid ${theme.palette.common.white}`,
  },
  card: {
    maxWidth: 300,
    minHeight: 400,
    background: theme.palette.grey[300],
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '60%',
  },
})

const ReviewsNone = ({ classes }) => (
  <Flexbox className={classes.container}>
    <Card
      classes={{ root: classes.border }}
      className={classes.card}
    >
      <CardContent className={classes.content}>
        <Typography
          style={typeColor}
          variant='h5'
        >
          No Reviews
          </Typography>
        <Divider variant='middle' />
        <Typography
          style={typeColor}
          component="p"
        >
          The are no reviews that match your filter criteria.
        </Typography>
        <Divider variant='middle' />
        <Typography
          style={typeColor}
          variant="overline"
        >
          Please try again.
        </Typography>
      </CardContent>
    </Card>
  </Flexbox>
)

ReviewsNone.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ReviewsNone)





