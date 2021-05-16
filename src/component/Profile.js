import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import {Link} from "react-router-dom"
import css from "./Profile.css"

class Profile extends Component {

    
    render() {
        
        const {user}=this.props
        console.log("WHATS WITH THE USER")
        console.log(user)
        return (
            <div>
                <h1> Hey {user.username} ! Welcome to your profile</h1>
                <Link to="/challenges" > <Button variant="outlined" color="secondary">Browse Challenges</Button> </Link>
                

                <p>{user.username}</p>
                <p>{user.email}</p>

                    
               
                <Link to={`/profile/${user._id}`}> <Button variant="outlined" color="defaults">Edit Profile</Button> </Link>
                <br></br>
                <div> <Button variant="outlined" color="secondary">Delete your account</Button>
              </div>

            </div>
        )
    }
}

export default Profile
