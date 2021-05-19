import axios from 'axios'
import React, { Component } from 'react'
import config from "../config"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Link} from "react-router-dom"



class EditProfile extends Component {

    state = {
        userProfile: {}
    }

    componentDidMount(){
        let userProfileId = this.props.match.params.id
        axios.get(`${config.API_URL}/profile/${userProfileId}`)
            .then((response)=>{
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
            userProfile: clonedUserProfile
        })
    }

    handlePasswordChange = (event)=>{
        let password = event.target.value
        console.log(password)
        let clonedUserProfile = JSON.parse(JSON.stringify(this.state.userProfile))
        clonedUserProfile.password = password
        this.setState({
            userProfile: clonedUserProfile
        })

    }

    handlePictureChange = (event) =>{
        let picture = event.target.value
        let clonedUserProfile = JSON.parse(JSON.stringify(this.state.userProfile))
        clonedUserProfile.profilePic = picture
        this.setState({
            userProfile: clonedUserProfile
        })


    }

    render() {

        const {userProfile} = this.state
        const {onEdit,onSubmitPicture} = this.props

        return (
            
            
            <div>    
                <TextField id="outlined-required"
                type="text"
                name="username"
                label="Username"
                placeholder='Enter username here'
                variant="outlined" onChange={this.handleUsernameChange} value={userProfile.username} />

                <form  onSubmit ={onSubmitPicture} enctype="multipart/form-data">
                    <input type="file" 
                    name="imageUrl" 
                    accept="image/png, image/jpg"/>
                    
                    <Button  onSubmit={this.handlePictureChange} value={userProfile.profilePic} type="submit">Submit</Button>
                </form>
                

                <TextField
                id="outlined-password-input"
                type="password"
                name="password"
                label="Password"
                autoComplete="current-password"
                variant="outlined" onChange={this.handlePasswordChange}  value={userProfile.password} />
                    <button type="submit"  className="newButtonOne" onClick={()=>{onEdit(userProfile)}} >Submit Changes
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                    </button>
                    <Link to="/profile"> Go back! </Link>
            </div>
            
        )
    }
}

export default EditProfile
