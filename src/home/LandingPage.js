// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/pricing/Pricing.js

import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/StarBorder'
import StyleLink from '@material-ui/core/Link'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Box from '@material-ui/core/Box'

import { pricingTiers, footerContent } from './data'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <StyleLink color="inherit" href="https://material-ui.com/">
        AllMyBacons
      </StyleLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 400,
    padding: '2em',
    '& > :nth-child(1)': {
      padding: '4em',
    },
    '& > :nth-child(2)': {
      padding: '2em',
    },
  },
  button: {
    maxHeight: 60,
    // margin: '1em',
    // bottom: 0,
  },
}))

function LandingPage() {
  console.log('LandingPAge')
  const classes = useStyles()

  return (
    <>
      <Container
        maxWidth="lg"
        component="main"
        className={classes.main}
      >
        <div>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Extend a fork to your audience, in one simple platform
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Your lightweight bacon sharing platform
          </Typography>
        </div>

        <div>
          <Button
            className={classes.button}
            size="medium"
            variant="outlined"
            color="primary"
          >
            Sign up for free
          </Button>
        </div>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        className={classes.footer}
      >
        <Grid container spacing={4} justify="space-evenly">
          {footerContent.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography
                variant="h6"
                color="textPrimary"
                gutterBottom
              >
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <StyleLink
                      href="#"
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {item}
                    </StyleLink>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </>
  )
}

export default LandingPage
