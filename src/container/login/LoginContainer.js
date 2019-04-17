import React, {useState} from 'react'
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

function LoginContainer(path) {
    const submitValues = (props, values) => {
        return (
            setTimeout(() => {
                if (props.email === 'admin@gmail.com' && props.password === '123456789') {
                    localStorage.setItem('token', 'ok')
                    path.history.replace('/about')
                } else {
                    values.setErrors({
                        email: ' ',
                        password: 'Incorrect email or password'
                    })
                }
                values.setSubmitting(false)
            }, 2000)
        )
    }

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
        onSubmit={submitValues}
        validateOnChange={false}
    />


}

export default LoginContainer