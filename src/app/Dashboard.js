// TODO separate folders and files

import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'

import Toolbar from './components/Toolbar'
import { useDashboardStyles } from './styles'
import { mainListItems } from './listItems'

function Dashboard() {
  const classes = useDashboardStyles()
  const [open, setOpen] = useState(true)

  const handleDrawer = () => {
    console.log('onDrawerClick')
    setOpen(!open)
  }

  return (
    <>
      <Toolbar
        classes={classes}
        mainListItems={mainListItems}
        onDrawerClick={handleDrawer}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <RouterLink to="/client">Your link</RouterLink>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default Dashboard
