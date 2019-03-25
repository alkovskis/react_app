import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css'

const login = (props) => (
    <form className="Login" onSubmit={props.onSubmit}>
        <TextField
            id="outlined-name"
            label="Username"
            value={props.username}
            onChange={props.onChange("username")}
            margin="normal"
            required
            variant="outlined"
        />
        <TextField
            id="outlined-name"
            label="Password"
            type="password"
            value={props.password}
            onChange={props.onChange("password")}
            margin="normal"
            required
            variant="outlined"
        />
        <Button
            type="submit"
            size="large"
            variant="outlined">
            Login
        </Button>
    </form>
)

export default login;