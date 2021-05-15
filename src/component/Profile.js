import axios from 'axios'
import React, { Component } from 'react'
import {Link, Redirect} from "react-router-dom"
import config from '../config'


//display image, the username, the email 
//edit profile and delete 
//challenges that its currently doing 
//Link to browse challenges - DONE
class Profile extends Component {

    state = {
        //profile: null,
        userProfile: null
    }
    

    componentDidMount(){        

        axios.get(`${config.API_URL}/api/profile`)
            .then((response)=>{
                this.setState({
                    userProfile: response.data
                })
                console.log(response.data)
            })

            .catch(()=>{console.log('did not mount correctly')})
    }

    render() {
        

        return (
            <div>
                <h1> Hey ! This is your profile</h1>
                
                <Link to="/challenges" > <button> Browse Challenges </button> </Link>
            </div>
        )
    }
}

export default Profile
