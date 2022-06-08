import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import { Container } from "react-bootstrap";
import { Dropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div>


    <Navbar bg="dark" variant="dark" >
    <Container >
    <Navbar.Brand href="https://www.google.com/">Food Lanka (PVT) LTD</Navbar.Brand>
    <Nav className="me-auto">
    
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/addfood">Add Food</Nav.Link>
      <Nav.Link href="/offers">Offers</Nav.Link>
      <Nav.Link href="/viewfood">View Food</Nav.Link>
    </Nav>
    </Container>

    
    
    
    <div style={{color:"red"}}>
    <Dropdown >
  <Dropdown.Toggle variant="info" id="dropdown-basic">
  Profile
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="/" >LOG OUT</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div> 
&nbsp;
&nbsp;
&nbsp;
   <div style={{marginRight:15}} >
    {/* <Avatar alt="prof" src={pl} /> */}
    </div>
    
    
  </Navbar>



    </div>
  )
}

export default Header