import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../config'

class ChallengeDetails extends Component {
    state={
        challengeDetails:null,
        days:1,
        dayToDisplay:null,
        userStartChallenge:null
    }

    componentDidMount(){
        let challengeDetailsId= this.props.match.params.id
        let categoryChallenges = this.props.match.params.category

        axios.get(`${config.API_URL}/api/challenges/${categoryChallenges}/${challengeDetailsId}`)
        .then((response)=>{
           // console.log(response.data)
           // console.log('component did mount')
            this.setState({
                challengeDetails: response.data,
                dayToDisplay: response.data.challengeDay[0]
            })
        })
        .catch(()=>{console.log('did not mount correctly')})
    }

    handleDisplay=(day)=>{
        //console.log(day)
        this.setState({
            dayToDisplay:day
        })
    }

    handleStart=()=>{

        axios.post(`${config.API_URL}/api/user-challenge/start/:challengeId`,{},{withCredentials:true})
        .then(()=>{
            
            this.setState({
                userStartChallenge:null
            })
        })
        .catch(()=>{console.log('user challenge did not start')})
    }

    render() {
        const {challengeDetails,dayToDisplay} = this.state
        if (!challengeDetails || !dayToDisplay){
            return (<h1>...Loading</h1>)
        }
        return (
            <div >
                <p>{challengeDetails.challengeName}</p>
                <p>{dayToDisplay.description}</p>
                <p>{dayToDisplay.day}</p>
                
                <button onClick={this.handleStart}>Start</button>
                
                
                <img src={challengeDetails.challengeImage}/>
                {
                    challengeDetails.challengeDay.map((day,index)=>{
                        return <button key={index} onClick={()=>this.handleDisplay(day)}>{index+1}</button>
                    })
                }
                
            </div>
        )
    }
}

export default ChallengeDetails
