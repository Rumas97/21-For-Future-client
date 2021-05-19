import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button';
import"./Navbar.css"
import { Nav, Navbar,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function NavigationBar(props){
  const{onLogout}=props
  const {user} = props
  return(
    <Navbar collapseOnSelect expand="lg" className="navbar" >
    <Navbar.Brand> <Link className="navbar-links" to="/"> Home </Link> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link> <Link className="navbar-links" to="/challenges" > Challenges  </Link> </Nav.Link>
        <Nav.Link><Link className="navbar-links" to="/donate"> Donate </Link> </Nav.Link>
        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
      <Nav>
        <Nav.Link className="navbar-links" href="#deets">{
                user ?
            
                 (
                  <>
                    <Link className="navbar-links" onClick={onLogout} type="submit" variant="outlined" color="default">Logout</Link>  
                    <Link className="navbar-links" to="/profile" > Profile  </Link>  
                  </>
                 ) 
                 : 
                 (
                    <>
                      <Link className="navbar-links" to="/login" > Login  </Link>
                      <Link className="navbar-links" to="/signup" > Signup  </Link>
                    </>
                  )
              }</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}


export default NavigationBar



//  const useStyles = makeStyles((theme) => ({
//    root: {
//      flexGrow: 1,
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//    },
//    menuButton: {
//      marginRight: theme.spacing(2),
//    },
//    title: {
//      flexGrow: 1,
//    },
//  }));

//  function MenuAppBar(props) {
//    const classes = useStyles()
//    const [auth, setAuth] = React.useState(true)
//    const [anchorEl, setAnchorEl] = React.useState(null)
//    const open = Boolean(anchorEl)
//    const{onLogout}=props
//    const {user} = props

//    const handleChange = (event) => {
//      setAuth(event.target.checked)
//    };

//    const handleMenu = (event) => {
//      setAnchorEl(event.currentTarget)
//    };

//    const handleClose = () => {
//      setAnchorEl(null);
//    };

//    return (

//      <div className={classes.root}>
      
//        <FormGroup>
//          <FormControlLabel
//            control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
//            label={auth ? 'Logout' : 'Login'}
//          />
//        </FormGroup>
//        <AppBar position="static">
//          <Toolbar>
//            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//              <MenuIcon />
//            </IconButton>
//            <Typography variant="h6" className={classes.title}>
//              <Link to="/"> Home  </Link>
//              <Link to="/challenges" > Challenges  </Link>
           
//              {
//                user ?
            
//                 (
//                  <>
//                    <Button onClick={onLogout} type="submit" variant="outlined" color="default">Logout</Button>  
//                    <Link to="/profile" > Profile  </Link>  
//                  </>
//                 ) 
//                 : 
//                 (
//                    <>
//                      <Link to="/login" > Login  </Link>
//                      <Link to="/signup" > Signup  </Link>
//                    </>
//                  )
//              }
           
//            </Typography>
//            {auth && (
//              <div>
//                <IconButton
//                  aria-label="account of current user"
//                  aria-controls="menu-appbar"
//                  aria-haspopup="true"
//                  onClick={handleMenu}
//                  color="inherit"
//                >
//                  <AccountCircle />
//                </IconButton>
//                <Menu
//                  id="menu-appbar"
//                  anchorEl={anchorEl}
//                  anchorOrigin={{
//                    vertical: 'top',
//                    horizontal: 'right',
//                  }}
//                  keepMounted
//                  transformOrigin={{
//                    vertical: 'top',
//                    horizontal: 'right',
//                  }}
//                  open={open}
//                  onClose={handleClose}
//                >
//                  <MenuItem onClick={handleClose}> <Link to="/profile"> Profile </Link> </MenuItem>
                
//                </Menu>
//              </div>
//            )}
//          </Toolbar>
//        </AppBar>
//      </div>
//    );
//  }
//  export default MenuAppBar
