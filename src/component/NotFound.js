import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./NotFound.css"
import Avocado from "../animations/avocado.json"
import LottieControl from "./LottieControl"




class NotFound extends Component {
    render() {
        return (
           

       <div>
           <h1> Looks like you messed something up </h1>
           <br/>
           <LottieControl animation={Avocado} width={"50rem"} height={"25rem"} />
           <br/>
           <br/>
           <h2> Go back to the <Link to="/" > homepage</Link> </h2>
       </div>
        )
    }
}

export default NotFound
