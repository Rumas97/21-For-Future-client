import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'

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
        return (
            <div>
               {
                   challenges.map((oneChallenge,index)=>{
                       return <div>
                           <h3>{oneChallenge.challengeName}</h3>
                       </div>
                   })
               } 
            </div>
        )
    }
}

export default AllChalOneCat

