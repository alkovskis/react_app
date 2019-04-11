import React from 'react'
import AppBar from '../appBar/AppBar'

const Layout = ({children: children, ...rest}) => {
    return (
        <AppBar
            {...rest}
            tadasGeriausias3000={children}
        />
    )
}


export default Layout