import React  from 'react'
import { Link } from 'react-router-dom'
import"./Navbar.css"
import { Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function NavigationBar(props){
  const{onLogout,user}=props
  return(
    <Navbar  collapseOnSelect expand="lg" className="navbar" >
    <Navbar.Brand> <Link className="navbar-links" to="/"> Home </Link> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link> <Link className="navbar-links" to="/challenges" > Challenges  </Link> </Nav.Link>
        <Nav.Link><Link className="navbar-links" to="/donate"> Donate </Link> </Nav.Link>
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




