import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Login, Home } from './components/Views'
import { useTheme } from './components/Context/hooks'

const App = () => {
  const [theme] = useTheme()

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/home' component={Home} />
          <Redirect to='/login' />
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
