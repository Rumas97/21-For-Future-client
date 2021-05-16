import { Button } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'
import './ChallengeDetails.css'


class ChallengeDetails extends Component {
    state={
        challengeDetails:null,
        days:1,
        dayToDisplay:null,
        userStartChallenge:null
    }

    componentDidMount(){
        let challengeDetailsId= this.props.match.params.id
        console.log("Is the ID undefined???")
        console.log(challengeDetailsId)
        let categoryChallenges = this.props.match.params.category

        axios.get(`${config.API_URL}/api/challenges/${categoryChallenges}/${challengeDetailsId}`)
        .then((response)=>{
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
            }, ()=>{
                this.props.history.push("/user-challenge/:id")
                console.log("newest console log")
                console.log(this.props)
            })
        })
        .catch(()=>{console.log('user challenge did not start')})
    }

    render() {
        const {user} = this.props
        const {challengeDetails,dayToDisplay} = this.state
        console.log(dayToDisplay)
        if (!challengeDetails || !dayToDisplay){
            return (<h1>...Loading</h1>)
        }

        return (
            <div>
                        {
                         user ? ( <Button variant="outlined" color="defaults" onClick={this.handleStart}>Start</Button>) : ("Hey, you need to login")
                        }
                                <br></br>
                                <br></br>
                                {
                    challengeDetails.challengeDay.map((day,index)=>{
                        return <button className="days-button" key={index} onClick={()=>this.handleDisplay(day)}>{index+1}</button>
                    })
                }
                <h2>{challengeDetails.challengeName}</h2>
                <p>In this challenge you'll try to stay 21 days without </p>
                <img src={challengeDetails.challengeImage}/>
                <br/>
                <p>{dayToDisplay.description}</p>

                
                <br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TQtRv-wdaJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                
            </div>
        )
    }
}

export default ChallengeDetails
