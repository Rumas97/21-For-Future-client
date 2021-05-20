import axios from 'axios'
import React, { Component } from 'react'
import config from "../config"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Link} from "react-router-dom"




class EditProfile extends Component {


    state = {
        userProfile: {},
        editedProfile:{}
    }

    componentDidMount(){
        let userProfileId = this.props.match.params.id
        axios.get(`${config.API_URL}/api/profile`, {withCredentials:true} )
            .then((response)=>{
                console.log("new response from today")
                console.log(response.data)
                this.setState({
                    userProfile: response.data
                })
            })

            .catch(()=>{
                console.log("error editing profile")
            })
    }

    handleUsernameChange = (event) => {
        let name = event.target.value
        console.log(name)
        let clonedUserProfile = JSON.parse(JSON.stringify(this.state.userProfile))
        clonedUserProfile.username = name
        this.setState({
            userProfile: clonedUserProfile,
            editedProfile: { ...this.state.editedProfile, username: name}
        })
    }

    handlePasswordChange = (event)=>{
        let password = event.target.value
        console.log(password)
        let clonedUserProfile = JSON.parse(JSON.stringify(this.state.userProfile))
        clonedUserProfile.password = password
        this.setState({
            userProfile: clonedUserProfile,
            editedProfile: { ...this.state.editedProfile, password}
        })

    }

    handlePictureChange = (event) =>{
        let profilePic = event.target.value
        let clonedUserProfile = JSON.parse(JSON.stringify(this.state.userProfile))
        clonedUserProfile.profilePic = profilePic
        this.setState({
            userProfile: clonedUserProfile,
            editedProfile: { ...this.state.editedProfile, profilePic}
        })

    }


   

    render() {

        const {userProfile, editedProfile} = this.state
        const {onEdit,onSubmitPicture} = this.props
        return (
            
            
            <div className="edit-profile"> 
            <h1>Edit your profile</h1>  
            <br></br>
                <TextField id="outlined-required"
                type="text"
                name="username"
                placeholder='Enter username here'
                variant="outlined" onChange={this.handleUsernameChange} value={userProfile.username} />
              <br></br>
                <TextField
                id="outlined-password-input"
                type="password"
                name="password"
                label="Password"
                autoComplete="current-password"
                variant="outlined" onChange={this.handlePasswordChange}  />
                
                <br></br>
                <form  onSubmit ={onSubmitPicture} enctype="multipart/form-data">
                    <input type="file" 
                    name="imageUrl" 
                    accept="image/png, image/jpg"/>
                    
                    <Button onSubmit={this.handlePictureChange} value={userProfile.profilePic} type="submit">Submit picture</Button>
                </form>
                <button type="submit"  className="newButtonOne" onClick={()=>{onEdit(editedProfile)}} >Submit Changes
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                </button>
                <br></br>
                <Link to="/profile"> Go back! </Link>
            </div>
            
        )
    }
}

export default EditProfile
