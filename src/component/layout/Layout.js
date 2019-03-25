import React, {Component} from 'react'
import AppBar from '../appBar/AppBar'
import {Switch} from 'react-router-dom'
import About from '../../component/about/About'

class Layout extends Component {

    componentWillMount() {
        console.log('will mount')
        if (!localStorage.getItem('token')) {
            this.props.history.replace('/')
        }
    }

    render() {
        return (
            <div>
                <AppBar/>
                <Switch>
                    <About/>
                </Switch>
            </div>
        )
    }
}


export default Layout