import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoundedSuspense } from 'react-brix'
import { Switch, Route } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import HomeDrawer from './HomeDrawer'
import HomeSwitchboard from './HomeSwitchboard'
import ReviewLoader from '../Reviews/ReviewLoader'
import HomeUser from './HomeUser'
import Standards from '../Standards'
import { getRouteTitles } from '../../../reference/routeTitles'
import { Flexbox } from '../../Layout'
import {
  withStyles,
  AppBar,
  Typography,
  IconButton,
  Toolbar,
} from '@material-ui/core'

const styles = theme => ({
  container: {
    flexDirection: 'column',
    height: '100%',
  },
  main: {
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  menu: {
    marginRight: theme.spacing.unit * 3,
  },
  bar: {
    background: theme.overrides.appBarBackgroundColor,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
  color: {
    color: theme.overrides.appBarColor,
  },
  title: {
    flexGrow: 1,
  },
})

const Home = ({ classes, location }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const path = location.pathname
    document.title = getRouteTitles(path)
  }, [location])

  return (
    <Flexbox className={classes.container}>
      <AppBar
        classes={{ root: classes.bar }}
        position='static'
      >
        <Toolbar>
          <IconButton
            classes={{ root: classes.color }}
            className={classes.menu}
            aria-label='Menu'
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            classes={{ root: classes.color }}
            className={classes.title}
            variant='h6'
            noWrap
          >
            {document.title}
          </Typography>
          <HomeUser />
        </Toolbar>
      </AppBar>
      <HomeDrawer useDrawer={[open, setOpen]} />
      <main className={classes.main}>
        <BoundedSuspense
          fallback={<ReviewLoader />}
          boundary={<div>Error loading reviews...</div>}
        >
          <Switch>
            <Route exact path='/home/standards' component={Standards} />
            <HomeSwitchboard />
          </Switch>
        </BoundedSuspense>
      </main>
    </Flexbox>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)