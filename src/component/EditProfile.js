import axios from 'axios'
import React, { Component } from 'react'
import config from "../config"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'



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

    render() {

        const {userProfile} = this.state
        const {onEdit} = this.props

        return (
            <div>
                
            <TextField id="outlined-required"
            type="text"
            name="username"
            label="Username"
            placeholder='Enter username here'
            variant="outlined" onChange={this.handleUsernameChange} value={userProfile.username} />
            
            <TextField
            id="outlined-password-input"
            type="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined" onChange={this.handlePasswordChange}  value={userProfile.password} />
                <Button type="submit" variant="outlined" color="default" onClick={()=>{onEdit(userProfile)}} >Submit Changes</Button>
            </div>
        )
    }
}

export default EditProfile
