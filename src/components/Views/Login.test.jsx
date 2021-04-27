import React from 'react'
import Login from './Login'
import { createShallow } from '@material-ui/core/test-utils'
import { withStyles } from '@material-ui/core/styles'
import { FormControl } from '@material-ui/core'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'

const styles = {
  container: {}
}

const Composer = props => {
  return (
    <Login {...props} />
  )
}

Composer.propTypes = {
  classes: PropTypes.object.isRequired,
}

const Wrapper = withStyles(styles)(Composer)

describe('Login Component', () => {

  describe('<Login />', () => {
    const shallow = createShallow()

    it('should render Login', () => {
      const wrapper = shallow(<Wrapper
        classes={{}}
      />)
      expect(wrapper.dive().find(Login)).toHaveLength(1)
    })
  })

  describe('<Login /> uses FormControl', () => {

    it('should render Login with 2 formControls', () => {
      const wrapper = mount(<Wrapper
        classes={{}}
      />)
      expect(wrapper.find(FormControl)).toHaveLength(2)
    })
  })
})