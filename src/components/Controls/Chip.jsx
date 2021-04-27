import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  withStyles,
  Chip as MuiChip,
} from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'

const styles = theme => ({
  root: {
    height: theme.typography.pxToRem(20),
  },
  label: {
    fontSize: theme.typography.pxToRem(10),
  },
  labelColor: {
    color: theme.palette.grey[700],
    borderColor: theme.palette.grey[700],
  },
  chip: {
    margin: theme.spacing.unit / 3,
  },
})

const Chip = ({
  classes,
  data,
  label,
  selector,
  useSelect,
}) => {
  const [selected, setSelected] = useSelect
  const isSelected = selected === data[selector]
  const toggleChip = () => !isSelected ? data[selector] : undefined

  return (
    <MuiChip
      label={data[label]}
      className={classes.chip}
      onClick={() => setSelected(toggleChip())}
      classes={{
        root: classes.root,
        label: classnames(
          classes.label,
          { [classes.labelColor]: !isSelected }
        )
      }}
      {...(isSelected ? { onDelete: () => null } : null)}
      {...(isSelected ? { deleteIcon: <DoneIcon /> } : null)}
      {...(isSelected ? { color: 'primary' } : null)}
      {...(isSelected ? { variant: 'default' } : { variant: 'outlined' })}
    />
  )
}

Chip.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  selector: PropTypes.string.isRequired,
  useSelect: PropTypes.array.isRequired,
}

export default withStyles(styles)(Chip)