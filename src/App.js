import React from 'react'
import './App.css'
import LoginContainer from './container/login/LoginContainer'
import {Route, Switch} from 'react-router-dom'
import About from './component/about/About'
import Error from './component/error/Error'
import TableContainer from './container/table/TableContainer'
import PrivateRoute from './HOC/PrivateRoute'

const app = () => (
    <Switch>
        <Route exact path="/" component={LoginContainer}/>
        <PrivateRoute exact path="/about" component={About}/>
        <PrivateRoute exact path="/table" component={TableContainer}/>
        <Route component={Error}/>
    </Switch>

)

export default app
