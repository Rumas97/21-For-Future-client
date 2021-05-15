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
        console.log("WHATS WITH THE USER")
        console.log(user)
        return (
            <div>
                <h1> Hey ! This is your profile</h1>
                <p>{user.username}</p>
                <p>{user.email}</p>
                
                <Link to="/challenges" > <button> Browse Challenges </button> </Link>
                <Link to={`/profile/${user._id}`} > <button> Edit Profile </button> </Link>
            </div>
        )
    }
}

export default Profile
