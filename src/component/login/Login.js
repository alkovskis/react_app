import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './Login.css'

export const Login = props => {

    const {
        values: {email, password},
        errors,
        touched,
        handleChange,
        isValid,
        setFieldTouched,
        handleSubmit
    } = props

    const change = (name, e) => {
        e.persist()
        handleChange(e)
        setFieldTouched(name, true, false)
    }

    return (
        <form className="Login"
              onSubmit={handleSubmit}>
            <TextField
                id="outlined-name"
                name="email"
                label="Email"
                value={email}
                onChange={change.bind(null, 'email')}
                margin="normal"
                variant="outlined"
                helperText={touched.email ? errors.email : ''}
                error={touched.email && Boolean(errors.email)}
            />
            <TextField
                id="outlined-name"
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={change.bind(null, 'password')}
                margin="normal"
                variant="outlined"
                helperText={touched.password ? errors.password : ''}
                error={touched.password && Boolean(errors.password)}
            />
            <Button
                type="submit"
                size="large"
                disabled={!isValid}
                variant="outlined">
                Login
            </Button>
        </form>)
}

