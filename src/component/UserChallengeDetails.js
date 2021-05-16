import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'

class UserChallengeDetails extends Component {
    state={
        userChallengeId:null,       
    }

    componentDidMount(){
        console.log(this.state)
        let userChallengeId= this.state._id
        

        axios.get(`${config.API_URL}/api/user-challenges/${userChallengeId}`)
        .then((response)=>{
            console.log(response.data)
            console.log('component did mount')
            this.setState({
                userChallengeId: response.data
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

export default UserChallengeDetails
