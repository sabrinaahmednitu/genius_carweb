import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../../../imags/logo-black.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import ManageServices from '../../ManageServices/ManageServices';

const Header = () => {
  const[user]=useAuthState(auth);

  const handleSignout=()=>{
    signOut(auth);
  }
    return (
    <Navbar collapseOnSelect expand="lg" sticky='top'  style={{backgroundColor: '#BDC3C7'}}>
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img height={30} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Services</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {/* <Nav.Link as={Link} to="/addservice">AddService</Nav.Link> */}
            {
              user && <>
               <Nav.Link as={Link} to="/addservice">Add-Service</Nav.Link>
               <Nav.Link as={Link} to="/manageservices">Manage-Services</Nav.Link>
               <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
               
              </>
            }


           {user ?
                <button className='btn btn-link text-white text-decoration-none ' onClick={handleSignout} >sign out</button>
            :
              <Nav.Link as={Link}  to="/login">
              Login
              </Nav.Link>
           }


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          );
        
 
};

export default Header;