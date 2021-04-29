import React from 'react'
import { List } from 'immutable'
import Reviews from './Reviews'
import AutoSizer from 'react-virtualized-auto-sizer'
import { createShallow } from '@material-ui/core/test-utils'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'

const styles = {
  fill: {}
}

const Composer = props => {
  return (
    <Reviews {...props} />
  )
}

Composer.propTypes = {
  classes: PropTypes.object.isRequired,
  reviews: PropTypes.instanceOf(List),
}

const Wrapper = withStyles(styles)(Composer)

describe('Reviews Component', () => {

  describe('<Reviews />', () => {
    const shallow = createShallow()

    it('should render Reviews', () => {
      const wrapper = shallow(<Wrapper
        classes={{}}
        reviews={List([{ id: '1' }])}
      />)
      expect(wrapper.dive().find(Reviews)).toHaveLength(1)
    })
  })

  describe('<Reviews /> uses Autosizer', () => {

    it('should render Reviews with react window Autosizer', () => {
      const wrapper = mount(<Wrapper
        classes={{}}
        reviews={List([{ id: '1' }])}
      />)
      expect(wrapper.find(AutoSizer)).toHaveLength(1)
    })
  })
})