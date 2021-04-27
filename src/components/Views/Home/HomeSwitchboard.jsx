import React from 'react'
import PropTypes from 'prop-types'
import FilterPanel from '../Filters/FilterPanel'
import Reviews from '../Reviews/Reviews'
import Reports from '../Reports/Reports'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import { Flexbox } from '../../Layout'
import { useReviews } from '../../Context/hooks'

const styles = theme => ({
  fill: {
    flexDirection: 'column',
    flex: 1,
  },
})

const HomeSwitchboard = ({ classes }) => {
  const [reviews, filterSetters, filterCount] = useReviews()

  return (

    <Flexbox className={classes.fill}>
      <FilterPanel
        filterCount={filterCount}
        filterSetters={filterSetters}
      />
      <Switch>
        <Route
          path='/home/reviews'
          render={props =>
            <Reviews
              reviews={reviews}
              {...props}
            />
          }
        />
        <Route
          exact
          path='/home/reports'
          render={props =>
            <Reports
              reviews={reviews}
              {...props}
            />
          }
        />
        <Redirect to='/home/reviews' />
      </Switch>
    </Flexbox>
  )
}

HomeSwitchboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeSwitchboard)
