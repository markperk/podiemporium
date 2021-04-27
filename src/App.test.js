import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Redirect, Route } from 'react-router-dom'
import { useTheme } from './components/Context/hooks'


jest.mock('./components/Context/hooks/useTheme')

let theme
describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    theme = useTheme.mockImplementation(() => 't')
  })

  test('renders with a theme prop', () => {
    jest.spyOn(console, "error").mockImplementation()
    const wrapper = shallow(<App />)
    expect(wrapper.find(MuiThemeProvider).prop('theme')).toBe('t')
  })

  test('render contains route, and redirect', () => {
    const wrapper = shallow(<App />)
    const redirect = <Redirect to="/login" />

    expect(wrapper.dive().find(Route)).toHaveLength(2)
    expect(wrapper).toContainReact(redirect)
  })

})