import React, { useState } from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import clsx from 'clsx'
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'
// import { ReactComponent as Logo } from '../Logo/logo.svg'

const useStyles = makeStyles((theme) => ({
  appBar: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    borderBottom: '0.2em solid black',
    // background: 'green',
  },
  bar: {
    background: 'red',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}))

const TopBar = ({ /*className,*/ onMobileNavOpen, ...rest }) => {
  const history = useHistory()
  const classes = useStyles()
  const [notifications] = useState([])
  // console.log('classes', classes, 'className', className)

  // simulate logged in state
  const loggedIn = true
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          AllMyBacons
        </Typography>
        <Button component={RouterLink} to="/login">
          Login
        </Button>
        <Button component={RouterLink} to="/client">
          Client
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
