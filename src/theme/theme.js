import { createMuiTheme } from '@material-ui/core/styles'

export const light = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'light',
    primary: {
      main: '#00abff',
    },
    background: {
      default: '#efefef',
    },
  },
  shadows: Array(25).fill('none'),
  overrides: {
    drawerWidth: 200,
    appBarBackgroundColor: '#fff',
    appBarColor: '#00abff',
    quoteText: '#474747'
  }
})

export const dark = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'dark',
    grey: {
      200: '#424242',
      300: '#424242',
      700: '#eeeeee',
      800: '#f5f5f5',
    },
    primary: {
      main: '#212121',
    },
    background: {
      default: '#9e9e9e',
    },
  },
  shadows: Array(25).fill('none'),
  overrides: {
    drawerWidth: 200,
    appBarBackgroundColor: '#303030',
    appBarColor: '#fff',
    quoteText: '#fff',
  }
})

/*
current
grey: {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
}
*/