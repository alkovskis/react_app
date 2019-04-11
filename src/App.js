import React from 'react'
import './App.css'
import LoginContainer from './container/login/LoginContainer'
import {Route, Switch} from 'react-router-dom'
import About from './component/about/About'
import Error from './component/error/Error'
import TableContainer from './container/table/TableContainer'
import PrivateComponent from './HOC/PrivateComponent'

const app = () => (
    <Switch>
        <Route exact path="/" component={LoginContainer}/>
        <PrivateComponent exact path="/about" component={About}/>
        <PrivateComponent exact path="/table" component={TableContainer}/>
        <Route component={Error}/>
    </Switch>

)

export default app
