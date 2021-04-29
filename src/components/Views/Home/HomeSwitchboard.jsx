import React from 'react'
import PropTypes from 'prop-types'
import FilterPanel from '../Filters/FilterPanel'
import Guides from '../Guides/Guides'
import { Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import { Flexbox } from '../../Layout'
import { useGuides } from '../../Context/hooks'

const styles = theme => ({
  fill: {
    flexDirection: 'column',
    flex: 1,
  },
})

const HomeSwitchboard = ({ classes }) => {
  const [guides, filterSetters, filterCount] = useGuides()
  console.log('guides', guides.toJS())

  return (

    <Flexbox className={classes.fill}>
      <FilterPanel
        filterCount={filterCount}
        filterSetters={filterSetters}
      />
      <Switch>
        <Route
          path='/apps/guides'
          render={props =>
            <Guides
              guides={guides}
              {...props}
            />
          }
        />
      </Switch>
    </Flexbox>
  )
}

HomeSwitchboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeSwitchboard)
