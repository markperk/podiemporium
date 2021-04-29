import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Home } from './components/Views'
import { useTheme } from './components/Context/hooks'

const App = () => {
  const [theme] = useTheme()

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/apps' component={Home} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
