import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoundedSuspense } from 'react-brix'
import { Switch } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import PodiumLogo from '../../../img/Podium_Logo_Black.svg'
import HomeDrawer from './HomeDrawer'
import HomeSwitchboard from './HomeSwitchboard'
import ReviewLoader from '../Guides/ReviewLoader'
import HomeUser from './HomeUser'
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
    padding: '0 110px',
    flexGrow: 1,
  },
  icon: {
    height: 15,
    marginRight: 20,
  },
  menu: {
    marginRight: theme.spacing.unit * 3,
  },
  bar: {
    background: theme.overrides.appBarBackgroundColor,
    borderBottom: `1px solid black`,
  },
  color: {
    color: 'black',
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
          <img className={classes.icon} src={PodiumLogo} alt='podium logo' />
          <Typography
            classes={{ root: classes.color }}
            className={classes.title}
            variant='h5'
            noWrap
          >
            Developer Guides
          </Typography>
          {/* <HomeUser /> */}
        </Toolbar>
      </AppBar>
      <HomeDrawer useDrawer={[open, setOpen]} />
      <main className={classes.main}>
        <BoundedSuspense
          fallback={<ReviewLoader />}
          boundary={<div>Error loading reviews...</div>}
        >
          <Switch>
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