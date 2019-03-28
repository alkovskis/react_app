import React, {Component} from 'react'
import {Login} from '../../component/login/Login'
import {Formik} from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({

    email: Yup.string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup.string('')
        .min(8, 'Password must contain atleast 8 characters')
        .required('Enter your password'),

})

class LoginContainer extends Component {
    state = {
        email: 'admin@gmail.com',
        password: '123456789',
    }

    submitValues = ({email, password}) => {
        console.log(email, password)
        if (email === this.state.email && password === this.state.password) {
            localStorage.setItem('token', 'ok')
            this.props.history.replace('/about')
        }
    }

    render() {
        const values = {email: '', password: ''}
        return (
            <Formik
                render={props => <Login {...props}/>}
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={this.submitValues}
            />
        )
    }
}

export default LoginContainer