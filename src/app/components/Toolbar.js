import React from 'react'

import clsx from 'clsx'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'

function Toolbar(props) {
  console.log('props', props)
  const { classes, mainListItems, onDrawerClick } = props
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !open && classes.drawerPaperClose,
        ),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={onDrawerClick}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>

      <Divider />
      <List>{mainListItems}</List>
      <Divider />
    </Drawer>
  )
}

export default Toolbar
