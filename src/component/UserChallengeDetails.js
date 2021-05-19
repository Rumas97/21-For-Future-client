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

    handleQuitChallenge = () =>{

        let userChallengeDetailsId = this.props.match.params.id
        axios.delete(`${config.API_URL}/api/user-challenge/${userChallengeDetailsId}`, {withCredentials: true})
        .then(()=>{
            this.setState({
                userchallengeDetails: null
            }, ()=>{
                this.props.history.push("/profile")
            } )
        })

        .catch(()=>{
            console.log("deleting a challenge did not work")
        })
  

    }



    render() {
        const {userchallengeDetails,dayToDisplay,daysDone} = this.state
        if (!userchallengeDetails || !dayToDisplay){
            return (<h1>...Loading</h1>)
        }

        return (
            <div>
                <h1 className="heading">{userchallengeDetails.challengeName}</h1>
                <div className="side-one">
                    <img src={userchallengeDetails.challengeImage} alt="challenge images"/>
                    <p>{userchallengeDetails.generalDesc}</p>
                </div>

                <div className="side-two">

                    <div className="days-button-background">
                        {
                            userchallengeDetails.challengeDay.map((day,index)=>{
                                return daysDone.includes(day.day) ? 
                                    <button className="days-button-done" onClick={()=>this.handleDisplay(day)}>{index+1}</button> :
                                    <button className="days-button" onClick={()=>this.handleDisplay(day)}>{index+1}</button>     
                            })
                        }
                    </div> 
                    <div className="day-desc">
                        <h5>Day {dayToDisplay.day}</h5>
                        <p>{dayToDisplay.description}</p>
                        <button class="newButtonOne" onClick={()=> this.handleDaysDone(dayToDisplay)  } > Check 
                                        {/* <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span> */}
                                       
                        </button>
                    </div>

                </div>  

                <button className="deleteProfButton" onClick={()=> this.handleQuitChallenge(userchallengeDetails)} > Quit the challenge
                    {/* <span></span>
                    <span></span>
                    <span></span>
                    <span></span>   */}
                </button>
            </div>
        )
          
    }
}

export default UserChallengeDetails
