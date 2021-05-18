import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'
import './ChallengeDetails.css'

class UserChallengeDetails extends Component {
    state={
        userchallengeDetails:null,
        days:1,
        dayToDisplay:null,
        daysDone: [],
        colorStatus:"#b7ff5a"
    }

    componentDidMount(){
        let userchallengeDetailsId= this.props.match.params.id
        console.log("where is our USER ID ")
        console.log(userchallengeDetailsId)

        axios.get(`${config.API_URL}/api/user-challenge/${userchallengeDetailsId}`, {withCredentials: true})
        .then((response)=>{
            console.log(response.data)
            console.log('component did mount for userChallenges')
            this.setState({
                userchallengeDetails: response.data.challengeId,
                dayToDisplay: response.data.challengeId.challengeDay[0],
                daysDone:response.data.dayTracker
            })
        })
        .catch(()=>{console.log('did not mount correctly for userChallenges')})
    }

    handleDisplay=(day)=>{
        console.log(day)
        this.setState({
            dayToDisplay:day,
            
        })
    }

    handleDaysDone = (dayToDisplay) =>{
        console.log(" Yummy!!!!")
        console.log(dayToDisplay)

        console.log(this.state.daysDone)
        let userchallengeDetailsId= this.props.match.params.id
        console.log(userchallengeDetailsId)
        axios.patch(`${config.API_URL}/api/user-challenge/${userchallengeDetailsId}`, {
            dayTracker: dayToDisplay.day   //maybe problem here
           
        } , {withCredentials: true})
            .then((response)=>{
                console.log("WE ARE HERE NOW")
                console.log(response.data)
                this.setState({
                        daysDone: [...response.data.dayTracker],
                     })
                
                
                
                console.log("new console for DAYS DONE")
                console.log(this.state.daysDone)
            })

            .catch(()=>{
              
                console.log ("updating the dayTracker is failing")
            })


    }


        //button will have an on click event 
        //patch request with the ID and the number 
        //front end we create a state for adding the days to the array

    render() {
        const {userchallengeDetails,dayToDisplay,daysDone} = this.state
        if (!userchallengeDetails || !dayToDisplay){
            return (<h1>...Loading</h1>)
        }

        return (
            <div>
                <h3>{userchallengeDetails.challengeName}</h3>
                <img src={userchallengeDetails.challengeImage}/>
                <p>{dayToDisplay.description}</p>
                <p>{dayToDisplay.day}</p>
                <p><button onClick={()=> this.handleDaysDone(dayToDisplay)  } > Check </button> </p>               
                {
                    userchallengeDetails.challengeDay.map((day,index)=>{
                        
                            //if day is included in days array
                           return daysDone.includes(day.day) ? 
                           
                                <button className="days-button-done" onClick={()=>this.handleDisplay(day)}>{index+1}</button> :
                            
                             
                                <button className="days-button" onClick={()=>this.handleDisplay(day)}>{index+1}</button> 
                            
                    })
                }
            </div>
        )
                
                
    }
    
}

export default UserChallengeDetails
