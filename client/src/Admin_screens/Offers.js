import React from 'react'
import Footer from '../Admin_components/Footer'
import Header from '../Admin_components/Header'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import '../Admin_style/circle.css'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div>
        <Header />
        <h1>New offer</h1>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" placeholder="Offer attached item" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" placeholder="Quantity" />
    
  </Form.Group>
  

  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control type="number" placeholder="Offering item" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
   
    <Form.Control type="text" placeholder="Offering item Quantity" />

  </Form.Group>
  <Button variant="primary" type="submit" size='lg'>
    Enter
  </Button>
  &nbsp;
  <Link to="/"><Button variant="primary" type="submit" size='lg'>
    Cancel
  </Button></Link>
</Form>

<br />
<br />
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Buy Item</th>
      <th>Quantity</th>
      <th>Offer Item</th>
      <th>Quantity</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Burger</td>
      <td>3</td>
      <td>Pepsi</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Sandwitch</td>
      <td>2</td>
      <td>Sprite</td>
      <td>1</td>
    </tr>
    
  </tbody>
</Table>
   
        {/* <Footer /> */}
    </div>
  )
}

export default Offers