import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

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
  );
}

// class Signup extends Component {
//     render() {
//         const {onSubmit} = this.props
//         return (
//             <div>
//                 <h1> Sign up Page </h1>
//                 <form onSubmit={onSubmit} >
//                     <div className="form-group">
//                         <label htmlFor="InputUsername">Username</label>
//                         <input type="text" className="form-control" id="InputUsername" name="username" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="InputEmail">Email address</label>
//                         <input type="email"  name="email" />
//                         <small >We'll never share your email with anyone else.</small>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="InputPassword">Password</label>
//                         <input name="password" type="password" className="form-control" id="InputPassword" />
//                     </div>
//                     <Button type="submit" variant="outlined" color="default">Create your account</Button>
                    
//                 </form>

//             </div>
//         )
//     }
// }

// export default Signup
