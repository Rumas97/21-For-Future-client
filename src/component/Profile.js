import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Profile.css"
import axios from "axios"
import config from "../config"
import Avatar from "../otherImages/avatar.png"

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
   
        if(!user || !userChallenges){
            return <h2>Loading ...</h2>
        }
        
        return (
            <div>
                <h1> Hey {user.username} ! Welcome to your profile 🌳</h1>
                <Link to="/challenges" > <button className="newButtonOne">Browse Challenges <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span></button> </Link>
                
                <img className="profile-image" default={Avatar} src={user.profilePic} alt= {user.username}/>
                

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



               
                <Link to={`/profile/${user._id}`}> <button className="newButtonOne">Edit Profile
                <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span></button> </Link>
                <br/>
                <br/>
                <div> <button onClick={()=>{onDelete(user._id)}} className="deleteProfButton">Delete your account <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span></button>
              </div>

            </div>
        )
    }
}

export default Profile
