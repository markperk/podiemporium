import React from 'react'
import { List } from 'immutable'
import Reports from './Reports'
import { AreaChart } from 'recharts'
import { createShallow } from '@material-ui/core/test-utils'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'
import { joinPlayDataWithReviews, getPlayReportData } from '../../../utils'

jest.mock('../../../utils')

const styles = {
  container: {}
}

const Composer = props => {
  return (
    <Reports {...props} />
  )
}

Composer.propTypes = {
  classes: PropTypes.object.isRequired,
  reviews: PropTypes.instanceOf(List),
}

const Wrapper = withStyles(styles)(Composer)

describe('Reports Component', () => {

  describe('<Reports />', () => {
    const shallow = createShallow()

    it('should render Reports', () => {
      const wrapper = shallow(<Wrapper
        classes={{}}
        reviews={List([{ id: '1' }])}
      />)
      expect(wrapper.dive().find(Reports)).toHaveLength(1)
    })
  })

  describe('<Reports /> uses AreaChart', () => {

    beforeEach(() => {
      joinPlayDataWithReviews.mockImplementation(x => x)
      getPlayReportData.mockImplementation(x => x)
    })

    it('should render Reports with 2 areacharts', () => {
      const wrapper = mount(<Wrapper
        classes={{}}
        reviews={List([{ id: '1' }])}
      />)
      expect(wrapper.find(AreaChart)).toHaveLength(2)
    })
  })
})