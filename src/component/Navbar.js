import React, { Component } from 'react'

class Navbar extends Component {

    render() {
        const {onLogout} = this.props

        return (
            <div>
                <button onClick={onLogout} >Logout</button>
            </div>
        )
    }
}

export default Navbar
