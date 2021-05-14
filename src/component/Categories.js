import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Categories extends Component {

    state={
        category:["Food", "Lifestyle", "Mobility", "Period"],
    }
    render() {
        const {category}= this.state
       
        return (
            <div>
                <h1>Challenges page</h1>
                {
                    category.map((oneCategory,index)=>{
                        return <div key={index}>
                            <ul>
                                <li><Link to={`challenges/${oneCategory}`}>{oneCategory}</Link></li>
                            </ul>
                       </div>
                        
                    })
                }
                
            </div>
        )
    }
}

export default Categories


