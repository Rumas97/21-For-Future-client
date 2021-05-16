import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


class Login extends Component {
    render() {
        const {onLogin, error} = this.props
        return (
            <div>
                <h1> Log in Page </h1>
                    <form onSubmit={onLogin} >
                        <div className="form-group">
                            <label htmlFor="InputEmail">Email address</label>
                            <input type="email" className="form-control" id="InputEmail" name="email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputPassword">Password</label>
                            <input name="password" type="password" className="form-control" id="InputPassword" />
                        </div>
                        <Button type="submit" variant="outlined" color="defaults">Login</Button>
                        {error && (<p style={{color: "red"}}>  {error.error}</p>) }
                    </form>
            </div>
        )
    }
}

export default Login
