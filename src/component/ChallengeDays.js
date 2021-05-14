// import axios from 'axios'
// import config from '../config'
// import React, { Component } from 'react'

// class ChallengeDays extends Component {

//     state={
//         days:[],
//         challengeDaysDetails:[]
//     }

//     componentDidMount(){
//         let userChallengeId= this.props.match.params.challengeId
//         console.log(userChallengeId)
//         axios.get(`${config.API_URL}/api/user-challenge/${userChallengeId}`)
//         .then((response)=>{
//             console.log(response.data)
//             this.setState({
//                 challengeDaysDetails:response.data
//             })
//         })
//         .catch(()=>{console.log('error mounting challenge days')})
//     }

//     render() {
//         const{challengeDaysDetails}= this.state
//         return (
//             <div>
//               <p>{challengeDaysDetails.category}</p>  
//             </div>
//         )
//     }
// }

// export default ChallengeDays
