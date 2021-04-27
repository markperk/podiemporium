import React from 'react'
import PropTypes from 'prop-types'
import { Flexbox } from '../Layout'
import { Redirect } from 'react-router-dom'
import { useLogin } from '../Context/hooks'
import {
  withStyles,
  FormControl,
  Input,
  InputLabel,
  Button,
  FormHelperText,
} from '@material-ui/core'

const styles = theme => ({
  container: {
    margin: theme.spacing.unit * 3,
    flexDirection: 'column',
    alignItems: 'center',
  },
  login: {
    background: theme.palette.grey[200],
    padding: theme.spacing.unit * 4,
    borderRadius: '4px',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 2,
    },
  },
  signature: {
    margin: `${theme.spacing.unit / 4}px 0`,
    width: 186,
    height: 65,
  },
  image: {
    margin: `${theme.spacing.unit * 4}px 0`,
    width: 150,
    height: 182,
  },
  button: {
    marginTop: theme.spacing.unit * 2,
  }
})

const Login = ({ classes }) => {
  const [user, errors, handleChange, handleSubmit] = useLogin()

  // if (user && !errors) return <Redirect to='/home' />

  return (
    <Flexbox className={classes.container}>
      <Flexbox>
        <img
          className={classes.image}
          src='https://www.dropbox.com/s/xk8hsg40rj7hio0/shake.png?raw=1'
          alt='shakespeare pic here'
        />
      </Flexbox>
      <Flexbox className={classes.login}>
        <Flexbox>
          <img
            className={classes.signature}
            src='https://www.dropbox.com/s/3c9oy2j7vet5ov6/william.png?raw=1'
            alt='Shakespeare'
          />
        </Flexbox>
        <form>
          <FormControl
            error={errors && errors.email ? true : false}
            margin='normal'
            required
            fullWidth
          >
            <InputLabel htmlFor='email'>Email Address</InputLabel>
            <Input
              id='email'
              name='email'
              autoFocus
              onChange={handleChange}
            />
            {errors && errors.password ?
              <FormHelperText>
                {errors.password}
              </FormHelperText> :
              null
            }
          </FormControl>
          <FormControl
            error={errors && errors.password ? true : false}
            margin='normal'
            required
            fullWidth
          >
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input
              id='password'
              name='password'
              type='password'
              onChange={handleChange}
            />
            {errors && errors.password ?
              <FormHelperText>
                {errors.password}
              </FormHelperText> :
              null
            }
          </FormControl>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </form>
      </Flexbox>
    </Flexbox>
  )
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)