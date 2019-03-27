import React, {Component} from 'react'
import Login from '../../component/login/Login'
import {Formik} from 'formik'
import * as Yup from "yup"

const validationSchema = Yup.object({

    email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string("")
        .min(8, "Password must contain atleast 8 characters")
        .required("Enter your password"),

});

class LoginContainer extends Component {
    state = {
        // username: '',
        // password: '',
    }



    handleChange = name => event => {
        console.log(name)
        this.setState({
            [name]: event.target.value

        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        if (this.state.username === 'admin@gmail.com' && this.state.password === '123456789') {
            localStorage.setItem('token', 'ok')
            this.props.history.replace('/about')
        }
    }

    render() {
        const values = { email: "", password: ""};
        return (
            <Formik
                render={props => <Login {...props}
                                            // username={this.state.username}
                                            // password={this.state.password}
                                            // onChange={this.handleChange}
                                            onSubmit={this.handleSubmit}
            />}
                    initialValues={values}
                    validationSchema={validationSchema}
            />

        )


    }
}

export default LoginContainer