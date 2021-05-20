import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Profile.css"
import axios from "axios"
import config from "../config"
import avatar from "../otherImages/avatar.png"

class Profile extends Component {

    state={
        userChallenges: null,
        image: true,
        loggedGoogle: null
   
    }

    componentDidMount(){

        const {loggedGoogle} = this.state

        if (!loggedGoogle){
            axios.get(`${config.API_URL}/api/user-challenge/all-challenges`,{withCredentials:true})
        .then((response)=>{
            console.log("response from userChallenges to display")
            console.log(response.data)
            this.setState({
                userChallenges: response.data,
                image: true,
                loggedGoogle: response.data
                
            })
        })
        .catch((err)=>{
            console.log('we dont see the user challenges')
        })
        }

    }

    

    // <img className="profile-image"  src={user.profilePic} alt= {user.username} />  ORIGINAL STATE 

    
    render() {
        const {userChallenges, loggedGoogle} = this.state
        console.log(userChallenges) 
        const {user, onDelete}=this.props     
        
   
        if(!user || !userChallenges || !loggedGoogle){
            return <h2>Loading ...</h2>
        }
        
        return (
            <div className="profile-page">
                <h1> Hey {user.username} ! Welcome to your profile 🌳</h1>
                <Link to="/challenges" > 
                    <button className="newButtonOne">Browse Challenges 
                        
                    </button> 
                </Link>
                
                    {
                        !user.profilePic ? (<img className="profile-image" src={avatar} />) : (<img className="profile-image" src={user.profilePic} alt= {user.username} />)
                    }    

                
                

                <p className= "user-details">Username: {user.username}</p>
                <p className= "user-details">Email: {user.email}</p>

                <h3>Current Challenges</h3>   

                <h5 className="challenges-done"> 
                    {
                        userChallenges.map((oneChallenge)=>{
                            return <div> <Link to={`user-challenge/${oneChallenge._id}`}>  {oneChallenge.challengeId.challengeName} </Link>  </div>
                        })
                    }  
                    
                </h5>
               
                <Link to={`/profile/${user._id}`}> 
                    <button className="newButtonOne">Edit Profile
                       
                    </button> 
                </Link>
                <br/>
                <br/>
                 <button onClick={()=>{onDelete(user._id)}} className="deleteProfButton">Delete your account 
                                        </button>
              

            </div>
        )
    }
}

export default Profile
