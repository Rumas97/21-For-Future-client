import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'
import ChallengeDays from './ChallengeDays'

class ChallengeDetails extends Component {
    state={
        challengeDetails:null,
        days:1,
        dayToDisplay:null,
       
    }

    componentDidMount(){
        let challengeDetailsId= this.props.match.params.id
        let categoryChallenges = this.props.match.params.category

        axios.get(`${config.API_URL}/api/user-challenge`)
        .then((response)=>{
            console.log(response.data)
            console.log('component did mount')
            this.setState({
                challengeDetails: response.data,
                dayToDisplay: response.data.challengeDay[0]
            })
        })
        .catch(()=>{console.log('did not mount correctly')})
    }

    handleDisplay=(day)=>{
        console.log(day)
        this.setState({
            dayToDisplay:day
        })
    }



    render() {
        const {challengeDetails,dayToDisplay} = this.state
        if (!challengeDetails || !dayToDisplay){
            return (<h1>...Loading</h1>)
        }
        return (
            <div>
                <p>{challengeDetails.challengeName}</p>
                <p>{dayToDisplay.description}</p>
                <p>{dayToDisplay.day}</p>
                
                <img src={challengeDetails.challengeImage}/>
                {
                    challengeDetails.challengeDay.map((day,index)=>{
                        return <button onClick={()=>this.handleDisplay(day)}>{index+1}</button>
                    })
                }
                
            </div>
        )
    }
}

export default ChallengeDetails
