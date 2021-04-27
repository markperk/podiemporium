import React from 'react'
import PropTypes from 'prop-types'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AssignmentIcon from '@material-ui/icons/Assignment'
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
            <NavLink to='/home/reviews'>
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Reviews" />
              </ListItem>
            </NavLink>
            <NavLink to='/home/reports'>
              <ListItem button>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItem>
            </NavLink>
            <NavLink to='/home/standards'>
              <ListItem button>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Standards" />
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