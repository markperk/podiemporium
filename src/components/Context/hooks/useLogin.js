import { useState, useEffect } from 'react'

export const useLogin = () => {
  const [user, setUser] = useState({})
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors) === 0 && isSubmitting) {
      const authenticatedUser = {
        email: values.email,
        isAuthenticated: true,
      }

      setUser(authenticatedUser)
    }
  }, [values, isSubmitting, errors])


  const validate = values => {
    let errors = {}
    if (!values.email) {
      errors.email = 'Email is required'
    }
    if (!values.password) {
      errors.password = 'Password is required'
    }
    return errors
  }

  const handleChange = e => {
    if (e) e.persist()
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = e => {
    if (e) e.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  return [
    user,
    errors,
    handleChange,
    handleSubmit,
  ]

}