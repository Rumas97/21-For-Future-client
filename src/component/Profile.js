import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Profile.css"
import axios from "axios"
import config from "../config"
import avatar from "../otherImages/avatar.png"
import picture from "../ecolifeImages/EcoBag.svg"

class Profile extends Component {

    state={
        userChallenges: null,
        image: true,
        loggedGoogle: null
   
    }

    componentDidMount(){

        

      
            axios.get(`${config.API_URL}/api/user-challenge/all-challenges`,{withCredentials:true})
        .then((response)=>{
            console.log("response from userChallenges to display")
            console.log(response.data)
            this.setState({
                userChallenges: response.data,
                image: true,
                
                
            })
        })
        .catch((err)=>{
            console.log('we dont see the user challenges')
        })
        

    }

    

    // <img className="profile-image"  src={user.profilePic} alt= {user.username} />  ORIGINAL STATE 

    
    render() {
        const {userChallenges} = this.state
        
        console.log("userChallenges", userChallenges) 
        const {user, onDelete}=this.props     
        console.log("user", user) 
   
        if(!user || !userChallenges){
            return <h2>Loading ...</h2>
        }
        
        return (
            <div>
                <h1 className="heading"> Hey {user.username} ! Welcome to your profile 🌳</h1>
                <div className="profile-page">
                    <div className="side">
                        
                        {
                                !user.profilePic ? (<img className="profile-image" src={avatar} />) : (<img className="profile-image" src={user.profilePic} alt= {user.username} />)
                        } 
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <div>
                            <Link to={`/profile/${user._id}`}> 
                                <button className="newButtonOne">Edit Profile
                                 
                                </button> 
                            </Link>
                            <br/>
                            <button onClick={()=>{onDelete(user._id)}} className="deleteProfButton">Delete your account 
                                                   
                            </button>
                        </div>
                    </div>
                    
                    <div className="side">
                        <h2>Current Challenges</h2>   
                        <h3 > 
                            {   userChallenges.length==0 ? (<h5>You haven't started any challenges yet!</h5>):
                                userChallenges.map((oneChallenge)=>{
                                    return <div className="challenges-done"> <Link to={`user-challenge/${oneChallenge._id}`}>  {oneChallenge.challengeId.challengeName} </Link>  </div>
                                })
                            }               
                        </h3>
                        <Link to="/challenges" > 
                            <button className="newButtonOne">Browse Challenges</button> 
                           
                        </Link>
                    </div>
                  
                

                </div>
                <img className="profile-deco" src={picture} />
            </div>
        )
    }
}

export default Profile
