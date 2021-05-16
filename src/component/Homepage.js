import '../Homepage.css'
import React, { Component } from 'react'
import EcoEducation from '../ecolifeImages/EcoEducation.svg'
import { Link } from 'react-router-dom'

class Homepage extends Component {
    render() {
        return (
            <div className='home-page'>
                <h1>21 for future</h1>
                <img className='home-image' src={EcoEducation} />
            </div>
        )
    }
}

export default Homepage
