import axios from 'axios'
import React, { Component } from 'react'
import config from "../config"

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
                <input onChange={this.handleUsernameChange} type="text" placeholder="username" value={userProfile.username} />
                <input onChange={this.handlePasswordChange} type="text" placeholder="password" value={userProfile.password} />
                <button onClick={()=>{onEdit(userProfile)}} >Submit Changes</button>
            </div>
        )
    }
}

export default EditProfile
