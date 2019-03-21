import React, {Component} from 'react'
import './App.css'
import LoginContainer from './container/login/LoginContainer'
import {Route, Switch} from 'react-router-dom'
import About from './component/about/About'
import Layout from './component/layout/Layout'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LoginContainer}/>
                <Layout>
                    <Route exact path="/about" component={About}/>
                </Layout>
            </Switch>

        )
    }
}

export default App
