import React from 'react'
import Range from './Range'
import { createShallow } from '@material-ui/core/test-utils'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'

const style = {
  container: {}
}

const Composer = props => {
  return (
    <Range {...props} />
  )
}

Composer.propTypes = {
  classes: PropTypes.object.isRequired,
  extents: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  marks: PropTypes.object.isRequired,
  useSelect: PropTypes.array.isRequired,
}

const Wrapper = withStyles(style)(Composer)

describe('Range Component', () => {

  describe('<Range />', () => {
    const shallow = createShallow()

    it('should render Range', () => {
      const wrapper = shallow(<Wrapper
        classes={{}}
        extents={[0, 5]}
        marks={{}}
        category='test'
        useSelect={[null, jest.fn()]}
      />)
      expect(wrapper.dive().find(Range)).toHaveLength(1)
    })
  })

  describe('<Range /> uses slider', () => {

    it('should render Range that uses rc-slider', () => {
      const wrapper = mount(<Wrapper
        classes={{}}
        extents={[0, 5]}
        marks={{}}
        category='test'
        useSelect={[null, jest.fn()]}
      />)
      expect(wrapper.find('.rc-slider')).toHaveLength(1)
    })
  })
})