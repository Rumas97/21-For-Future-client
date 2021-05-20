import React, { Component } from 'react'
import ButtonBases from './CategoryButtons'
import "./Categories.css"
import image from "../ecolifeImages/EcoTransport.svg"
import tesla from "../ecolifeImages/TeslaCar.svg"

class Categories extends Component {

    render() {
       
        return (
            <div>
                    <h1>Our Challenges </h1>
                    <br/>
                    <p>Browse through the four main categories and take action now. Every small step counts!</p>
                    <br/>
                  <ButtonBases />
                
                <img className="tesla" src={image} />
                <img className="tesla"  src={tesla} />
            </div>
        )
    }
}
export default Categories


