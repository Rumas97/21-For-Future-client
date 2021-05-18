import axios from 'axios'
import config from './config'
import './App.css'
import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router'
import Categories from './component/Categories'
import AllChalOneCat from './component/AllChalOneCat'
import ChallengeDetails from './component/ChallengeDetails'
import Signup from './component/Signup'
import Login from './component/Login'
import Profile from './component/Profile'
import MenuAppBar from './component/Navbar'
import EditProfile from './component/EditProfile'
import Homepage from './component/Homepage'
import DonateStripe from './component/DonateStripe'
import UserChallengeDetails from './component/UserChallengeDetails'

class App extends Component {

  state = {
    user: null,
    error: null,
    fetchingUser: true,
    userProfile: null,
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

      .catch((errorObject)=>{

         this.setState({
          error: errorObject.response.data
        })
        
      })
  }

  handleLogout = () => {

    axios.post(`${config.API_URL}/api/logout`, {}, {withCredentials: true} )
      .then(()=>{
        this.setState({
          user: null
        }, ()=>{
          this.props.history.push("/")
        })
      })

      .catch(()=>{
        console.log("error happening")
      
      })

  }

  handleEditProfile = (user) =>{
    console.log(user)
    console.log("user is looost")
    console.log(this.state)
    const {_id} = this.state.user

    axios.patch(`${config.API_URL}/api/profile/${_id}`, {
      username: user.username,
      password: user.password,
    }, {withCredentials: true})
      .then(()=>{
        let newUserProfile = this.state.user.map((singleUserProfile)=>{
          if (user.id === singleUserProfile._id){
            singleUserProfile.username = user.username
            singleUserProfile.password = user.password

          }
            return singleUserProfile
        })

        this.setState({
          user: newUserProfile
        }, ()=>{
          this.props.history.push("/")
        })

      })

      .catch(()=>{
        console.log ("editing profile is failing")
      })

  }

  handleSubmitPicture=(event)=>{
    event.preventDefault()

    let image= event.target.imageUrl.files[0]
    let formData= new FormData()
    formData.append('imageUrl', image)

    console.log(formData)
    axios.post(`${config.API_URL}/api/upload`, formData,{withCredentials:true})
    .then((response)=>{
      this.setState({
        user:response.data
      })
    })
  }


  handleDeleteProfile = (userId) =>{

    const {_id} = this.state.user

    axios.delete(`${config.API_URL}/api/profile/${_id}/delete`, {withCredentials: true})
      .then(()=>{
      
        this.setState({
          user: null
        }, ()=>{
          this.props.history.push("/")
        } ) 
      })

      .catch(()=>{
        console.log("user not deleted")

      })

  }
 
  componentDidMount(){        

    axios.get(`${config.API_URL}/api/profile`, {withCredentials: true})
        .then((response)=>{
            this.setState({
              user: response.data,
              fetchingUser: false,
              
            })
           
        })

        .catch(()=>{console.log('did not mount correctly')})
  }

  render() {

    const {error, user} = this.state



    
    return (
      <div className='App'>
        <MenuAppBar onLogout={this.handleLogout} user={user} />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path="/signup" render={(routeProps)=>{
            return <Signup onSubmit={this.handleSignUp} {...routeProps} /> 
          }}  />
         <Route exact path="/login" render={(routeProps)=>{
           return <Login error={error} onLogin={this.handleLogin} {...routeProps}  />
         }} />

         <Route exact path="/profile" render={(routeProps)=>{
           return <Profile user={user} onDelete={this.handleDeleteProfile} {...routeProps} />
         }} />

         <Route exact path="/profile/:id" render={(routeProps)=>{
           return <EditProfile onSubmitPicture={this.handleSubmitPicture} onEdit={this.handleEditProfile} {...routeProps} />
         }} />

          <Route exact path='/challenges' render={(routeProps)=>{
            return <Categories {...routeProps}/>
          }}/>
          <Route exact path='/challenges/:category' render={(routeProps)=>{
            return <AllChalOneCat {...routeProps}/>
          }}/>
          <Route exact path='/challenges/:category/:id' render={(routeProps)=>{
            return <ChallengeDetails user={user} {...routeProps}/>
          }}/>

          <Route exact path="/donate" render={()=>{
            return <DonateStripe/>
          }} />

          <Route exact path="/user-challenge/:id" render={(routeProps)=>{
            return <UserChallengeDetails user={user} {...routeProps} />
          }} />



           
          </Switch>
      </div>
    )
  }
}

export default withRouter(App)