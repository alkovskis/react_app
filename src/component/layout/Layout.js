import React from "react";
import AppBar from '../appBar/AppBar'

const layout = props => (
    <div>
        <AppBar/>
        {props.children}
    </div>
)


export default layout;