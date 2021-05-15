import axios from 'axios'
import config from './config'
import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router'
import Categories from './component/Categories'
import AllChalOneCat from './component/AllChalOneCat'
import ChallengeDetails from './component/ChallengeDetails'
import Signup from './component/Signup'
import Login from './component/Login'
import Profile from './component/Profile'
import MenuAppBar from './component/Navbar'

class App extends Component {

  state = {
    user: null,
    error: null,
    fetchingUser: true,
    userProfile: null
  }

  handleSignUp = (event) => {
    event.preventDefault()
    let {email, username, password} = event.target

    let newUser = {
      username: username.value,
      email: email.value,
      password: password.value
    }

    axios.post(`${config.API_URL}/api/signup`, newUser,  {withCredentials: true})
      .then((response)=>{
        this.setState({
          user: response.data
        }, ()=>{
          this.props.history.push("/")
        })
      })

      .catch(()=>{
        console.log ("sign up not working")
      })

    

  }

  handleLogin = (event) => {
    event.preventDefault()
    const {email, password} = event.target 

    let newUser = {
      email: email.value,
      password: password.value
    }

    console.log("we are here")
    console.log(newUser)

    axios.post(`${config.API_URL}/api/login`, newUser,  {withCredentials: true})
      .then((response)=>{
        this.setState({
          user: response.data,
          error: null
        }, ()=>{
          this.props.history.push("/profile")
        })
      })

      .catch((err)=>{

        // this.setState({
        //   error: errorObject.response.data
        // })
        console.log("log in failed")
      })
  }

  handleLogout = () => {

    axios.post(`${config.API_URL}/api/logout`, {withCredentials: true})
      .then(()=>{
        this.setState({
          user: null
        }, ()=>{
          this.props.history.push("/")
        })
      })

      .catch((errorObject)=>{

        console.log('error loggin out')
      })

  }

  componentDidMount(){        

    axios.get(`${config.API_URL}/api/profile`, {withCredentials: true})
        .then((response)=>{
            this.setState({
              user: response.data,
              fetchingUser: false
            })
            console.log(response.data)
        })

        .catch(()=>{console.log('did not mount correctly')})
  }

  render() {

    const {error, user,fetchingUser} = this.state

    if(fetchingUser){
      return <p>Loading . . . </p>
    }
    
    return (
      <div>
        <MenuAppBar onLogout={this.handleLogout} user={user} />
        <Switch>
          <Route exact path='/' />
          <Route exact path="/signup" render={(routeProps)=>{
            return <Signup onSubmit={this.handleSignUp} {...routeProps} /> 
          }}  />
         <Route exact path="/login" render={(routeProps)=>{
           return <Login error={error} onLogin={this.handleLogin} {...routeProps}  />
         }} />

         <Route exact path="/profile" render={(routeProps)=>{
           return <Profile user={user} {...routeProps} />
         }} />

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

export default withRouter(App)