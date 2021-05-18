import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Profile.css"
import axios from "axios"
import config from "../config"

class Profile extends Component {

    state={
        userChallenges: null
    }

    componentDidMount(){
            
        axios.get(`${config.API_URL}/api/user-challenge/all-challenges`,{withCredentials:true})
        .then((response)=>{
            console.log("response from userChallenges to display")
            console.log(response.data)
            this.setState({
                userChallenges: response.data
                
            })
        })
        .catch((err)=>{
            console.log('we dont see the user challenges')
        })
    }
    
    render() {
        const {userChallenges} = this.state
        console.log(userChallenges) 
        const {user, onDelete}=this.props
        const {id} = this.props.match.params
        


        //const {challengeName} = this.state.userChallenges.challengeId
     
   

        if(!user || !userChallenges){
            return <h2>Loading ...</h2>
        }
        
        return (
            <div>
                <h1> Hey {user.username} ! Welcome to your profile 🌳</h1>
                <Link to="/challenges" > <Button variant="outlined" color="secondary">Browse Challenges</Button> </Link>
                

                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>

                 <h2>CURRENT CHALLENGES</h2>   

                <h3> 
                    {
                        userChallenges.map((oneChallenge)=>{
                            return <div> <Link to={`user-challenge/${oneChallenge._id}`}>  {oneChallenge.challengeId.challengeName} </Link>  </div>
                        })
                    }  
                    
                    </h3>



               
                <Link to={`/profile/${user._id}`}> <Button variant="outlined" color="defaults">Edit Profile</Button> </Link>
                <br/>
                <br/>
                <div> <Button onClick={()=>{onDelete(user._id)}} variant="outlined" color="secondary">Delete your account</Button>
              </div>

            </div>
        )
    }
}

export default Profile
