import axios from 'axios'
import React, { Component } from 'react'
import {Link, Redirect} from "react-router-dom"
import config from '../config'


//display image, the username, the email 
//edit profile and delete 
//challenges that its currently doing 
//Link to browse challenges - DONE
class Profile extends Component {

    
    render() {
        
        const {user}=this.props
        return (
            <div>
                <h1> Hey ! This is your profile</h1>
                <p>{user.username}</p>
                
                <Link to="/challenges" > <button> Browse Challenges </button> </Link>
            </div>
        )
    }
}

export default Profile
