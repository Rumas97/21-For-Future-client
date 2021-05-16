import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';





class Homepage extends Component {
    render() {
        return (
            <div>
                <h1> 21 FOR FUTURE </h1>

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
