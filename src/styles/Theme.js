import React from 'react'
import {
  colors,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core'
// import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'
import { Reset } from 'styled-reset'
import shadows from './shadows'
import typography from './typography'

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: colors.indigo[500],
    },
    secondary: {
      main: colors.indigo[500],
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  shadows,
  typography,
})

const Theme = ({ children }) => {
  return (
    <>
      <Reset />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  )
}

// // TODO not test only for now
// const theme = {
//   colors: {
//     aliceBlue: '#F4FAFF',
//     platinum: '#DEE7E7',
//     blueBell: '#B7ADCF',
//     cadet: '#4F646F',
//     grey: '#535657',
//     white: 'white',
//   },
//   fonts: ['Roboto', 'sans-serif'],
//   fontSizes: {
//     small: '1rem',
//     medium: '2rem',
//     large: '3rem',
//   },
//   breakpoints: {
//     xxxs: 400,
//     xxs: 500,
//     xs: 600,
//     xsm: 750,
//     sm: 960,
//     md: 1280,
//     lg: 1960,
//   },
//   shadow: '0 0 .25rem 0 #535657',
//   shadowHover: '0 0 0.5rem 0 #535657',
// }

export default Theme
