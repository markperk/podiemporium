import { useBrix } from 'react-brix'
import { useTheme } from './useTheme'


jest.mock('react-brix')

describe('useTheme', () => {

  beforeEach(() => {
    useBrix.mockReturnValue([null, jest.fn()])
  })

  it('returns the light theme if theme is not set', () => {
    const result = useTheme()
    expect(result).toMatchSnapshot()
  })
})