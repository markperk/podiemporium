import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import Guide from '../Guide/Guide'
import {
  Card,
  CardHeader,
  CardMedia,
  withStyles,
  Divider,
  Typography,
  Modal
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

const GuidesCard = ({ classes, guides }) => {
  console.log('guides', guides.toJS())
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card
        className={classes.card}
        style={{ border: `1px solid black` }}
        onClick={() => setOpen(true)}
      >
        <CardMedia
          className={classes.media}
          image={guides.get('image')}
          title={guides.get('title')}
        />
        <CardHeader
          title={
            <Typography
              variant='body1'
              style={{ color: 'black' }}
            >
              {guides.get('title')}
            </Typography>
          }
          classes={{
            root: classes.root,
            title: classes.title,
            subheader: classes.subheader,
          }}
          subheader={`
          ${guides.get('technology')}  |  
          Views: ${guides.get('views')}  |  
          Rating: ${guides.get('rating')} 
        `}
        />
        <Divider variant="middle" />
        <ReviewCardContent guides={guides} />
        <Divider variant="middle" />
        <ReviewCardBase guides={guides} />
      </Card>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Guide guides={guides} />
      </Modal>
    </>
  )
}

GuidesCard.propTypes = {
  classes: PropTypes.object.isRequired,
  guides: PropTypes.instanceOf(Map),
}

export default withStyles(styles)(GuidesCard)