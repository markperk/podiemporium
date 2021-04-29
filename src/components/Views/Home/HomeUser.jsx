import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useBrix } from 'react-brix'
import { paths } from '../../Context/paths'
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const HomeUser = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [theme, setTheme] = useBrix(paths.theme.get())
  const open = Boolean(anchorEl)

  const toggleTheme = () => {
    const toggledTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(toggledTheme)
  }

  return (
    <div>
      <IconButton
        aria-owns={open ? 'menu-appbar' : undefined}
        aria-haspopup="true"
        onClick={e => setAnchorEl(e.currentTarget)}
        color="inherit"
      >
        <Avatar
          alt="User"
          src=''
        />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={toggleTheme}>Toggle Theme</MenuItem>
        <MenuItem onClick={() => {}}>Log out</MenuItem>
      </Menu>
    </div>
  )
}

HomeUser.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
}

export default withRouter(HomeUser)