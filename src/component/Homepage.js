import './Homepage.css'
import React, { Component } from 'react'
import EcoEducation from '../ecolifeImages/EcoEducation.svg'
import EcoFood from "../ecolifeImages/EcoFoodandTransport.svg"
import Clean from "../ecolifeImages/CleanMind.svg"
import { Link } from 'react-router-dom'


// <img className='home-image' src={EcoEducation} />
class Homepage extends Component {
    render() {
        return (
            <div className='home-page'>
                
                
                <div id="homePageImage">
                     <h1 className="LogoName">21 FOR FUTURE</h1>
                     <h2>Take action now!</h2>
                     
                </div>
            

                <div id="homePageImage2">
                    <div className="around">
                        <img className='home-image' src={Clean} alt="clean"/>
                        <h3>Create an account now to take place in our challenges</h3>
                            <Link  to="/signup">   
                                <button className="newButtonOne"> 
                                    Sign up!
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                </button>
                            </Link> 
                    </div>

                    
                


                    <div className="around"> 
                        <img className='home-image' src={EcoFood} alt="ecofood"/>

                        <h3>Check out our 21 day challenges to start making an impact</h3>

                        <Link to="/challenges"> <button className="newButtonOne">Challenges  <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span></button> </Link> 
                    </div>

                    <div className="around"> 
                        <img className='home-image' src={EcoEducation} alt="education Ilustration"/>

                        <h3>Contribute with one of the three organizations we collaborate</h3>

                        <Link to="/donate"> <button className="newButtonOne">Donate <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span></button> </Link> 
                    </div>
                </div>   


            </div>


        )
    }
}

export default Homepage
