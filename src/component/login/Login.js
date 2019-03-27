import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './Login.css'

const login = (props) => {

    const {
        values: {email, password},
        errors,
        touched,
        handleChange,
        isValid,
        setFieldTouched
    } = props

    const change = (name, e) => {
        e.persist()
        handleChange(e)
        console.log(errors)
        setFieldTouched(name, true, false)
    }

    // handleChange = name => event => {
    //     console.log(name)
    //     this.setState({
    //         [name]: event.target.value
    //
    //     })
    // }

    return (
        <form className="Login"
              onSubmit={props.onSubmit}>
            <TextField
                id="outlined-name"
                name="email"
                label="Email"
                value={email}
                // onChange={props.onChange('username')}
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
                // onChange={props.onChange('password')}
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

export default login