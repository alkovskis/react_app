import {Route, Redirect} from 'react-router-dom'
import React from 'react'
import Layout from '../component/layout/Layout'

const PrivateComponent = ({component: Component, ...rest}) => (
    <Layout props={"aaaaaa"}>
        <Route {...rest} render={(props) => (
            localStorage.getItem('token')
                ? <Component{...props}/>
                : <Redirect to="/"/>
        )}/>
    </Layout>
)

export default PrivateComponent