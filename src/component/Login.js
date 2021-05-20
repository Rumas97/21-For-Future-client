  
import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import {Link} from "react-router-dom"
import GoogleButton from './GoogleButton'


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const {onLogin, error,onGoogleFailure, onGoogleSuccess} = props

  return (
    <form className={classes.root} onSubmit={onLogin} noValidate autoComplete="off">
        <div>
            <h1> Log in Page </h1>
        
            <TextField
            id="outlined-required"
            type="email"
            name="email"
            label="Email"
            placeholder='Type your email here'
            variant="outlined"
            />
            <TextField
            id="outlined-password-input"
            type="password"
            name="password"
            label="Password"
            autoComplete="current-password"
            variant="outlined"
            />
        </div>
        <button type="submit" className="newButtonOne">Login
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {error && (<p style={{color: "red"}}>  {error.error}</p>) }
        <br/>
        <br/>
        <p>Don't you have an account? <Link to="/signup" className="otherAnc"> Sign up now!</Link> </p>
        <GoogleButton onSuccess={onGoogleSuccess} onFailure={onGoogleFailure} /> 
        

    </form>

  )
}