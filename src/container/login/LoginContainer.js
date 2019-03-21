import React, {Component} from 'react'
import Login from '../../component/login/Login'


class LoginContainer extends Component {
    state = {
        username: '',
        password: '',
    }

    handleChange = name => event => {
        console.log(name)
        this.setState({
            [name]: event.target.value

        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.username === 'admin' && this.state.password === 'test') {
            this.props.history.push('/about')
        }
    }

    render() {
        return <Login username={this.state.username}
                      password={this.state.password}
                      onChange={this.handleChange}
                      onSubmit={this.handleSubmit}/>

    }
}

export default LoginContainer