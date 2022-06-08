import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import Footer from '../components/Footer'
import Header from '../Admin_components/Header'
import { Table } from 'react-bootstrap'

const Home = () => {
  return (
      
<div>
       <Header />
       <br />
       <div>
      <Link to="/addfood"> <Button size="lg" variant="danger">Add a new item </Button></Link>
       </div>
       <br />

     
      <Table striped bordered hover>
  <thead>
    <tr>
              <th><h1>Main</h1></th>  
              <th><h1>Soft Drinks</h1></th>  
              <th><h1>Short Eats</h1></th>  
              <th><h1>Dessert</h1></th>
              
    </tr>
  </thead>
  <tbody>
    <tr>
              <td><Link to="/viewfood"><Button size="sm">Mixed Rice </Button></Link></td>
              <td><Button size="sm" className='text-center justify-content-center'>Cocacola </Button></td>
              <td><Button style ={{backgroundColor:"red"}} size="sm">Burger </Button></td>
              <td><Button size="sm">Icecream </Button></td>
    </tr>
    <tr>
              <td><Link to="/viewfood"><Button size="sm">Pizza </Button></Link></td>
              <td><Button size="sm">Sprite </Button></td>
              <td><Button size="sm">Hotdog </Button></td>
              <td><Button size="sm">Yoghut </Button></td>
    </tr>
    <tr>
              <td><Link to="/viewfood"><Button size="sm">Chicken Rice </Button></Link></td>
              <td><Button size="sm">Pepsi </Button></td>
              <td><Button size="sm">Sandwitch </Button></td>
              <td><Button size="sm">Cake </Button></td>
    </tr>
    <tr>
              <td><Link to="/viewfood"><Button size="sm">Rice and curry </Button></Link></td>
              <td><Button size="sm">Fanta </Button></td>
              <td><Button size="sm">Rolls </Button></td>
              <td><Button size="sm">Watalappam </Button></td>
    </tr>
  </tbody>
</Table>
    
       
       <br />

        {/* <Footer /> */}
    </div>
  )
}

export default Home