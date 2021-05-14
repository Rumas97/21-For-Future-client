import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import {Link} from 'react-router-dom'

class AllChalOneCat extends Component {

    state={
        challenges:[]
    }

    componentDidMount(){
        console.log(this.props)

        let categoryChallenges = this.props.match.params.category
        console.log(categoryChallenges)
        axios.get(`${config.API_URL}/api/challenges/${categoryChallenges}`)
        .then((response)=>{
            console.log(response.data)
            this.setState({challenges:response.data})
        })
        .catch(()=>{console.log('error fetching challenges of one category')})
    }

    render() {
        const{challenges}= this.state
        console.log(challenges)
        let categoryChallenges = this.props.match.params.category
        let challengeDetailsId= this.props.match.params.id
        return (
            <div>
               {
                   challenges.map((oneChallenge,index)=>{
                       return <div key={index}>
                        <Link to={`/challenges/${categoryChallenges}/${challengeDetailsId}`}><h3>{oneChallenge.challengeName}</h3></Link>
                       </div>
                   })
               } 
            </div>
        )
    }
}

export default AllChalOneCat

