import React from 'react'
import PropTypes from 'prop-types'
import DashboardIcon from '@material-ui/icons/Dashboard'
import BarChartIcon from '@material-ui/icons/BarChart'
import { NavLink } from 'react-router-dom'
import { Flexbox } from '../../Layout'
import {
  withStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

const styles = theme => ({
  paper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: theme.overrides.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
})

const HomeDrawer = ({ classes, useDrawer }) => {
  const [open, setOpen] = useDrawer

  return (
    <Drawer
      open={open}
      classes={{
        paper: classes.paper
      }}
      onClose={() => setOpen(false)}
    >
      <Flexbox
        flexDirection='column'
        tabIndex={0}
        role='button'
        onClick={() => setOpen(true)}
        onKeyDown={() => setOpen(true)}
      >
        {
          <List>
            <NavLink to='/apps/guides'>
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Guides" />
              </ListItem>
            </NavLink>
            <NavLink to='/apps/reports'>
              <ListItem button>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItem>
            </NavLink>
          </List>
        }
      </Flexbox>
    </Drawer>
  )
}

HomeDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  useDrawer: PropTypes.array.isRequired,
}

export default withStyles(styles)(HomeDrawer)