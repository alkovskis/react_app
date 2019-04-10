import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './Login.css'
import {Form} from 'formik'

export const Login = props => {

    const {
        values: {email, password},
        errors,
        touched,
        handleChange,
        isSubmitting,
    } = props

    return (
        <Form className="Login">
            <TextField
                name="email"
                label="Email"
                value={email}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                helperText={touched.email ? errors.email : ''}
                error={touched.email && Boolean(errors.email)}
            />
            <TextField
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                helperText={touched.password ? errors.password : ''}
                error={touched.password && Boolean(errors.password)}
            />
            <Button
                type="submit"
                size="large"
                disabled={isSubmitting}
                variant="outlined">
                Login
            </Button>
        </Form>)
}

