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

        const {_id} = this.state.challengeDetails
        //const {id} = this.props.match.params -- We can try later if this works as well

        axios.post(`${config.API_URL}/api/user-challenge/start/${_id}`,{},{withCredentials:true})
        .then((response)=>{
            const {_id} = response.data
            
            this.setState({
                userStartChallenge:null
            }, ()=>{
                this.props.history.push(`/user-challenge/${_id}`)
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
                <h1>{challengeDetails.challengeName}</h1>
                <div className="block">                
                
                    <div className="one-side">
                        <img src={challengeDetails.challengeImage}/>
                        <p>{challengeDetails.generalDesc}</p>
                    </div>
                
                    <br/>
                    <br/>

                    <div className="one-side">
                        {
                        user ? ( <Button variant="outlined" color="defaults" onClick={this.handleStart}>Start</Button>) : (<h5>Please login or signup to start this challenge</h5>) 
                        }
                        <br></br>
                        <br></br>
                        <div className="days-button-background">
                            {
                                challengeDetails.challengeDay.map((day,index)=>{
                                    return <button className='days-button' key={index} onClick={()=>this.handleDisplay(day)}>{index+1}</button>
                                })
                            }
                        </div>
                        <br/>
                        <div>
                        <p>{dayToDisplay.day}</p>
                        <p>{dayToDisplay.description}</p>
                        </div>
                    
                        <br/>
                        <iframe width="430" height="300" src="https://www.youtube.com/embed/TQtRv-wdaJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                

                </div>
            </div>
        )
    }
}

export default ChallengeDetails
