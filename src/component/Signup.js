import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import "./SignUp.css"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Signup(props) {
  const classes = useStyles();
  const {onSubmit} = props


  return (
    <>
    <form className={classes.root} onSubmit={onSubmit} noValidate autoComplete="off">
        <div>
            <h1> Sign up Page </h1>
        
            <TextField
            id="outlined-required"
            type="text"
            name="username"
            label="Username"
            placeholder='Enter username here'
            variant="outlined"
            />
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
        <button type="submit" className="newButtonOne" >Sign up!
        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span></button>
        
    </form>

    
    <h1 class="black-lives-matter">#SAVE THE PLANET</h1>
    </>
  );
}



// export default Signup
