import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'

class UserChallengeDetails extends Component {
    state={
        userchallengeDetails:null,
        days:1,
        dayToDisplay:null,
       
    }

    componentDidMount(){
        let userchallengeDetailsId= this.state._id
        console.log("where is our USER ID ")
        console.log(userchallengeDetailsId)

        axios.get(`${config.API_URL}/api/user-challenge/${userchallengeDetailsId}`)
        .then((response)=>{
            console.log(response.data)
            console.log('component did mount for userChallenges')
            this.setState({
                userchallengeDetails: response.data,
                dayToDisplay: response.data.challengeDay[0]
            })
        })
        .catch(()=>{console.log('did not mount correctly for userChallenges')})
    }

    handleDisplay=(day)=>{
        console.log(day)
        this.setState({
            dayToDisplay:day
        })
    }



    render() {
        const {userchallengeDetailsId,dayToDisplay} = this.state
        if (!userchallengeDetailsId || !dayToDisplay){
            return (<h1>...Loading</h1>)
        }

        return (
            <div>
                <p>{userchallengeDetailsId.challengeName}</p>
                <p>{dayToDisplay.description}</p>
                <p>{dayToDisplay.day}</p>
                
                <img src={userchallengeDetailsId.challengeImage}/>
                {
                    userchallengeDetailsId.challengeDay.map((day,index)=>{
                        return <button onClick={()=>this.handleDisplay(day)}>{index+1}</button>
                    })
                }
                
            </div>
        )
    }
}

export default UserChallengeDetails
