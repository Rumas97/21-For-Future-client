import React, { Component } from 'react'
import ButtonBases from './CategoryButtons'
import "./Categories.css"

class Categories extends Component {

    render() {
       
        return (
            <div>
                    <h1>Our Challenges </h1>
                    <p>Browse through the four main categories and take action now. Every small step counts!</p>
                  <ButtonBases />
        
                {/* {
                    category.map((oneCategory,index)=>{
                        return <div key={index}>
                            <ul>
                                <li><Link to={`challenges/${oneCategory}`}>{oneCategory}</Link></li>
                            </ul>

                            
                       </div>
                        
                    })
                } */}
                
            </div>
        )
    }
}
export default Categories


