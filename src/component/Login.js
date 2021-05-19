import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom"

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
  const {onLogin, error} = props

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
            type="password"
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
    </form>

  );
}


// class Login extends Component {
//     render() {
//         const {onLogin, error} = this.props
//         return (
//             <div>
//                 <h1> Log in Page </h1>
//                     <form onSubmit={onLogin} >
//                         <div className="form-group">
//                             <label htmlFor="InputEmail">Email address</label>
//                             <input type="email" className="form-control" id="InputEmail" name="email" />
//                             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="InputPassword">Password</label>
//                             <input name="password" type="password" className="form-control" id="InputPassword" />
//                         </div>
//                         <Button type="submit" variant="outlined" color="defaults">Login</Button>
//                         {error && (<p style={{color: "red"}}>  {error.error}</p>) }
//                     </form>
//             </div>
//         )
//     }
// }

// export default Login
