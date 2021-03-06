import { Link } from "react-router-dom"
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
            })
        })
        .catch(()=>{console.log('user challenge did not start')})
    }

    render() {
        const {user} = this.props
        const {challengeDetails,dayToDisplay} = this.state

        if (!challengeDetails || !dayToDisplay){
            return (<p>...Loading</p>)
        }

        return (
            <div>
                <h1 className="heading">{challengeDetails.challengeName}</h1>

                {
                        user ? ( <button className="newButtonOne" onClick={this.handleStart}>Start
                        <span></span>
                        <span></span>
                        <span></span>
                        </button>) : (<p>*Please <Link to="/login" > login </Link> or <Link to="/signup" > signup  </Link> to start this challenge</p>) 
                }
                
                
                <div className="block">                
                
                    <div className="side-one">
                        <img src={challengeDetails.challengeImage} alt={challengeDetails.challengeName}/>
                        <p>{challengeDetails.generalDesc}</p>
                    </div>
                
                    <br/>
                    <br/>

                    

                    <div className="side-two">

                        <div className="days-button-background">
                            {
                                challengeDetails.challengeDay.map((day,index)=>{
                                    return <button className='days-button' key={index} onClick={()=>this.handleDisplay(day)}>{index+1}</button>
                                })
                            }
                        </div>
                        <br/>
                        <div className="day-desc">
                            <h2>Day {dayToDisplay.day}</h2>
                            <p>{dayToDisplay.description}</p>
                        </div>
                    
                        <br/>
                        
                    </div>

                    

                </div>
            </div>
        )
    }
}

export default ChallengeDetails
