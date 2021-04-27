import React from 'react'
import ClassNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

const exists = value => value !== undefined

const Flexbox = ({
  children,
  classes,
  className: classNameProp,
  style: styleProp,
  alignContent,
  alignItems,
  alignSelf,
  justifyContent,
  flexDirection,
  flexWrap,
  flex,
  width,
  height,
  paddingTop,
  marginBottom,
  ...rest
}) => {

  const mergedStyleProps = { width, height, flex, paddingTop, marginBottom }

  return (
    <div
      style={{
        ...mergedStyleProps,
        ...styleProp,
      }}
      className={ClassNames(classes.display, {
        [classes[`alignContent_${alignContent}`]]: exists(alignContent),
        [classes[`alignItems_${alignItems}`]]: exists(alignItems),
        [classes[`alignSelf_${alignSelf}`]]: exists(alignSelf),
        [classes[`justifyContent_${justifyContent}`]]: exists(justifyContent),
        [classes[`flexDirection_${flexDirection}`]]: exists(flexDirection),
        [classes[`flexWrap_${flexWrap}`]]: exists(flexWrap),
      },
        classNameProp)}
      {...rest}
    >
      {children}
    </div>
  )
}

const styles = () => ({
  display: {
    display: 'flex',
  },
  'alignContent_center': { alignContent: 'center' },
  'alignContent_flex-end': { alignContent: 'flex-end' },
  'alignContent_flex-start': { alignContent: 'flex-start' },
  'alignContent_space-around': { alignContent: 'space-around' },
  'alignContent_space-between': { alignContent: 'space-between' },
  'alignContent_stretch': { alignContent: 'stretch' },

  'alignItems_baseline': { alignItems: 'baseline' },
  'alignItems_center': { alignItems: 'center' },
  'alignItems_flex-end': { alignItems: 'flex-end' },
  'alignItems_flex-start': { alignItems: 'flex-start' },
  'alignItems_stretch': { alignItems: 'stretch' },

  'alignSelf_baseline': { alignSelf: 'baseline' },
  'alignSelf_center': { alignSelf: 'center' },
  'alignSelf_flex-end': { alignSelf: 'flex-end' },
  'alignSelf_flex-start': { alignSelf: 'flex-start' },
  'alignSelf_stretch': { alignSelf: 'stretch' },

  'justifyContent_center': { justifyContent: 'center' },
  'justifyContent_flex-end': { justifyContent: 'flex-end' },
  'justifyContent_flex-start': { justifyContent: 'flex-start' },
  'justifyContent_space-around': { justifyContent: 'space-around' },
  'justifyContent_space-between': { justifyContent: 'space-between' },

  'flexDirection_column-reverse': { flexDirection: 'column-reverse' },
  'flexDirection_column': { flexDirection: 'column' },
  'flexDirection_row-reverse': { flexDirection: 'row-reverse' },
  'flexDirection_row': { flexDirection: 'row' },

  'flexWrap_nowrap': { flexWrap: 'nowrap' },
  'flexWrap_wrap-reverse': { flexWrap: 'wrap-reverse' },
  'flexWrap_wrap': { flexWrap: 'wrap' },
})

export default withStyles(styles)(Flexbox)
