import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Flexbox } from '../Layout'

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 4,
  }
})

const Standards = ({ classes }) => {
  const link = 'https://docs.google.com/spreadsheets/d/13RQ6Nk_0NV1HNlEOt_4DYcyGJQOLZdSVa5hHFJ_1iqg/edit?usp=sharing'
  return (
    <Flexbox className={classes.container}>
      Read about Enterprise Application Standards
      &nbsp;
      <a href={link} target='_blank' rel="noopener noreferrer">here</a>.
    </Flexbox>
  )
}

Standards.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Standards)