import React from 'react'
import { Table } from 'react-bootstrap'
import Footer from '../Admin_components/Footer'
import Header from '../Admin_components/Header'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import '../Admin_style/circle.css'
import { Link } from 'react-router-dom'

const Addfood = () => {
  return (
    <div>
        <Header />


        <h1>Add food</h1>

        <Table striped bordered hover>

        <thead>
       <tr>
              <th >
                <div>

                <div className='circle'>
                  <p class="text">Add a photo</p> 
                 </div>
                  <div className='upload'>
                  <input type="file" />
                  </div>

                </div>
            
                </th>  
              <th>
                
              <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">  
    <Form.Control type="text" placeholder="Enter name" /> 
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control type="number" placeholder="Enter price" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Label>Select Category</Form.Label>
    <Form.Check type="checkbox" label="A" />
    <Form.Check type="checkbox" label="B" />
    <Form.Check type="checkbox" label="C" />
    <Form.Check type="checkbox" label="D" />
    <Form.Label>Add Estimated Time</Form.Label>
    <Form.Control type="text" placeholder="Enter estimated time" />
  </Form.Group>
  <Button variant="primary" type="submit" size='lg'>
    Enter
  </Button>
  &nbsp;
  <Link to="/">
  <Button variant="primary" type="submit" size='lg'>
    Cancel
  </Button>
  </Link>
</Form>
              
              
              </th>            
       </tr>
       </thead>

        </Table>


        {/* <Footer /> */}
    </div>
  )
}

export default Addfood