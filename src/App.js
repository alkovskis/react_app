import React from 'react'
import './App.css'
import LoginContainer from './container/login/LoginContainer'
import {Route, Switch} from 'react-router-dom'
import Layout from './component/layout/Layout'
import Error from './component/error/Error'

const app = () => (
    <Switch>
        <Route exact path="/" component={LoginContainer}/>
        <Route exact path="/about" component={Layout}/>
        <Route component={Error}/>
    </Switch>

)

export default app
