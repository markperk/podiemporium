import React from 'react'
import Standards from './Standards'
import { createShallow } from '@material-ui/core/test-utils'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const style = {
  container: {}
}

const Composer = ({
  classes,
}) => <Standards classes={{}} />

Composer.propTypes = {
  classes: PropTypes.object.isRequired,
}

const Composition = withStyles(style)(Composer)

describe('<Standards />', () => {
  const shallow = createShallow()

  it('should render Standards', () => {
    const wrapper = shallow(<Composition />)
    expect(wrapper.dive().find(Standards)).toHaveLength(1)
  })
})