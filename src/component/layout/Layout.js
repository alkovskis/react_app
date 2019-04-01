import React from 'react'
import AppBar from '../appBar/AppBar'

const Layout = (props) => (
    <div>
        <AppBar/>
        {props.children}
    </div>
)

export default Layout