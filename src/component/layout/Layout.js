import React from 'react'
import AppBar from '../appBar/AppBar'

const Layout = ({component: Component, ...rest}) => (
    <AppBar {...rest} render={(props) => (
        <Component{...props}/>)}/>
)

export default Layout