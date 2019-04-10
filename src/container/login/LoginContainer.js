import React, {Component} from 'react'
import {Login} from '../../component/login/Login'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {Redirect} from 'react-router-dom'

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

    submitValues = ( values,{ setSubmitting, setErrors, resetForm}) => {
        setTimeout(()=>{
            if (values.email === this.state.email && values.password === this.state.password) {
                localStorage.setItem('token', 'ok')
                this.props.history.replace('/about')
            }else {
                setErrors({email: " ",
                password: "Incorrect email or password"})
            }
            setSubmitting(false)
        },2000)

    }

    render() {
        const values = {email: '', password: ''}
        if (localStorage.getItem('token')) {
            return (
                <Redirect to='/about'/>
            )
        }
        return <Formik
            render={props => <Login {...props}/>}
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={this.submitValues}
            validateOnChange={false}
            validateOnBlur={false}
        />

    }
}

export default LoginContainer