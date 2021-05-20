import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            
               <footer>
                   <p>Made with ❤️ by <Link to ="https://github.com/Ragar23">Raquel</Link> and <Link to ="https://github.com/Rumas97">Rutul</Link>  🌳</p>
               </footer>
            
        )
    }
}

export default Footer
