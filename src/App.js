import axios from 'axios'
import config from './config'
import React, { Component } from 'react'
import { Route, Switch} from 'react-router'
import Categories from './component/Categories'
import AllChalOneCat from './component/AllChalOneCat'
import ChallengeDetails from './component/ChallengeDetails'
import UserChallengeDetails from './component/UserChallengeDetails'

class App extends Component {


  render() {

    return (
      <div>
        <Switch>
          <Route exact path='/' />
          <Route exact path='/challenges' render={(routeProps)=>{
            return <Categories {...routeProps}/>
          }}/>
          <Route exact path='/challenges/:category' render={(routeProps)=>{
            return <AllChalOneCat {...routeProps}/>
          }}/>
          <Route exact path='/challenges/:category/:id' render={(routeProps)=>{
            return <ChallengeDetails {...routeProps}/>
          }}/>


           
          </Switch>
      </div>
    )
  }
}

export default App