import '../Homepage.css'
import React, { Component } from 'react'
import EcoEducation from '../ecolifeImages/EcoEducation.svg'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

class Homepage extends Component {
    render() {
        return (
            <div className='home-page'>
                <h1>21 for future</h1>
                <img className='home-image' src={EcoEducation} />
            
            
              
                <h2>Take action! Sign up now!</h2>

                
                <div>
                    <Link to="/signup"> <Button variant="outlined" color="default">Create an account</Button> </Link> 
                </div>


                <div> 
                 <Link to="/challenges"> <Button variant="outlined" color="default">Check out our challenges</Button> </Link> 
                </div>

                <div> 
                 <Link to="/donate"> <Button variant="outlined" color="default">Donate</Button> </Link> 
                </div>



            </div>


        )
    }
}

export default Homepage
