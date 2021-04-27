import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'immutable'
import { withStyles, Typography, Divider } from '@material-ui/core'
import { Flexbox } from '../../Layout'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { joinPlayDataWithReviews, getPlayReportData } from '../../../utils'

const styles = theme => ({
  container: {
    flexDirection: 'column',
    margin: theme.spacing.unit * 4,
  },
  tooltip: {
    flexDirection: 'column',
    padding: theme.spacing.unit,
    border: `1px solid ${theme.palette.primary.contrastText}`,
    background: 'rgba(255,255,255, .3)'
  }
})

const Reports = ({ classes, reviews }) => {
  const rawData = joinPlayDataWithReviews(reviews).toJS()
  const data = getPlayReportData(rawData)

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <Flexbox className={classes.tooltip}>
          <Typography variant='body1'>
            {payload[0].payload.title}
          </Typography>
          <Typography variant='caption'>
            {`Rating: ${payload[0].payload.rating}`}
          </Typography>
          <Typography variant='caption'>
            {`Speeches: ${payload[0].payload.speeches}`}
          </Typography>
          <Typography variant='caption'>
            {`Words: ${payload[0].payload.words}`}
          </Typography>
        </Flexbox>
      )
    }
    return null
  }

  return (
    <Flexbox className={classes.container}>
      <Typography variant='h6'>
        Comparisons across play ratings
      </Typography>
      <Divider variant='middle' />
      <p>Number of words in play & rating</p>
      <AreaChart width={700} height={200} data={data} syncId="anyId"
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="rating" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Area type='monotone' dataKey='words' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
      <p>Number of speeches in play & rating</p>
      <AreaChart width={700} height={200} data={data} syncId="anyId"
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="rating" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Area type='monotone' dataKey='speeches' stroke='#82ca9d' fill='#82ca9d' />
      </AreaChart>
    </Flexbox>
  )
}

Reports.propTypes = {
  classes: PropTypes.object.isRequired,
  reviews: PropTypes.instanceOf(List),
}

export default withStyles(styles)(Reports)
