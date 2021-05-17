import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import {Link} from "react-router-dom"
import css from "./Profile.css"
import config from '../config'
import axios from 'axios'

class Profile extends Component {

    state={
        userChallenges: null
    }

    componentDidMount(){
        console.log(this.props)
        
        let userChallengeId = this.props.match.params.id
        console.log(userChallengeId)
        axios.get(`${config.API_URL}/api/user-challenges/${userChallengeId}`)
        .then((response)=>{
            this.setState({
                userChallenges: response.data
            })
        })
        .catch((err)=>{
            console.log('we dont see the user challenges')
        })
    }
    
    render() {
        
        const {user}=this.props

        if(!user){
            return <h2>Loading...</h2>
        }
        console.log("WHATS WITH THE USER")
        console.log(user)
        return (
            <div>
                <h1> Hey {user.username} ! Welcome to your profile 🌳</h1>
                <Link to="/challenges" > <Button variant="outlined" color="secondary">Browse Challenges</Button> </Link>
                

                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>

                    
               
                <Link to={`/profile/${user._id}`}> <Button variant="outlined" color="defaults">Edit Profile</Button> </Link>
                <br/>
                <br/>
                <div> <Button variant="outlined" color="secondary">Delete your account</Button>
              </div>

            </div>
        )
    }
}

export default Profile
