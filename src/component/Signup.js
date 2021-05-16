import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class Signup extends Component {
    render() {
        const {onSubmit} = this.props
        return (
            <div>
                <h1> Sign up Page </h1>
                <form onSubmit={onSubmit} >
                    <div className="form-group">
                        <label htmlFor="InputUsername">Username</label>
                        <input type="text" className="form-control" id="InputUsername" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputEmail">Email address</label>
                        <input type="email"  name="email" />
                        <small >We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Password</label>
                        <input name="password" type="password" className="form-control" id="InputPassword" />
                    </div>
                    <Button type="submit" variant="outlined" color="default">Create your account</Button>
                    
                </form>

            </div>
        )
    }
}

export default Signup
