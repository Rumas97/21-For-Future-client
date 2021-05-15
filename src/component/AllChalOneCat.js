import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import {Link} from 'react-router-dom'

class AllChalOneCat extends Component {

    state={
        challenges:[]
    }

    componentDidMount(){

        let categoryChallenges = this.props.match.params.category

        axios.get(`${config.API_URL}/api/challenges/${categoryChallenges}`)
        .then((response)=>{
            console.log(response.data)
            this.setState({challenges:response.data})
        })
        .catch(()=>{console.log('error fetching challenges of one category')})
    }

    render() {
        const{challenges}= this.state
        let categoryChallenges = this.props.match.params.category
        return (
            <div>
               {
                   challenges.map((oneChallenge,index)=>{
                       return <div key={index}>
                        <Link to={`/challenges/${categoryChallenges}/${oneChallenge._id}`}><h3>{oneChallenge.challengeName}</h3></Link>
                        <h3>{oneChallenge._id}</h3>
                       </div>
                   })
               } 
            </div>
        )
    }
}

export default AllChalOneCat

