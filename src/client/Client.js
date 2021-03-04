/*
   This is where all the links will be shown to the public
*/

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Avatar from '@material-ui/core/Avatar'
// import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
// import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
// import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

// temp
import SonGoku from '../assets/songoku.png'

// TODO can add to root as footer
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Linktree-mock
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  // paper: {
  //   marginTop: theme.spacing(8),
  //   // display: 'flex',
  //   // // flexDirection: 'column',
  //   // alignItems: 'center',

  // },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const links = [
  'https://www.youtube.com/',
  'https://www.google.com/',
  'https://www.facebook.com/',
  'https://www.instagram.com/',
]

function Client() {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Avatar src={SonGoku} />
        <Typography component="h1" variant="h5">
          Son Goku
        </Typography>
      </div>

      <Grid item xs={12}>
        {links.map((link) => (
          <LinkContainer>
            <Link to={link}>{link}</Link>
          </LinkContainer>
        ))}
      </Grid>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

const LinkContainer = styled.div`
  width: 90%;
  max-width: 300px;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 4px 0px; // Quitlet's card box-shadow
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }
`
export default Client
