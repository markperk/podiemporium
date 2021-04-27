import React from 'react'
import Home from './Home'
import { createShallow } from '@material-ui/core/test-utils'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'


const styles = {
  container: {}
}

const Composer = props => {
  return (
    <Home {...props} />
  )
}

Composer.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

const Wrapper = withStyles(styles)(Composer)

describe('Home Component', () => {

  describe('<Home />', () => {
    const shallow = createShallow()

    it('should render Home', () => {
      const wrapper = shallow(<Wrapper
        classes={{}}
        location={{}}
      />)
      expect(wrapper.dive().find(Home)).toHaveLength(1)
    })
  })
})