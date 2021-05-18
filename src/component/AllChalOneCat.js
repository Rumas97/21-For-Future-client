import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import { Paper } from '@material-ui/core'
import {Link} from 'react-router-dom'
//import {Button} from "@material-ui/core"
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card"
import 'bootstrap/dist/css/bootstrap.min.css'
import imageOne from "../ecolifeImages/Battery.svg"




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
                        
                        <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={imageOne} />
                        <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="default"> <Link to={`/challenges/${categoryChallenges}/${oneChallenge._id}`}><h3 className="anchorAllChall">{oneChallenge.challengeName}</h3></Link>   </Button>
                    </Card.Body>
                </Card>
                       </div>
                   })
                   
               } 
               
                
            </div>
        )
    }
}

export default AllChalOneCat

