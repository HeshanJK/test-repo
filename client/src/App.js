import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import POS_Home from './POS_components/POS_Home';
import Landing from './Landing_component/Landing';
import './App.css'
import Home from './Admin_screens/Home';
import OderTable from './Kitchen_component/OderTable';
import AllOrders from './Kitchen_component/AllOrders';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Landing />}></Route>
        
        <Route path="/POS_Home" exact element={<POS_Home />}></Route>
        <Route path="/Admin_Home" exact element={<Home/>}></Route>
        <Route path="/OderTable" exact element={<OderTable/>}></Route>
        <Route path="/AllOrders" exact element={<AllOrders/>}></Route>


        {/* <Route path="/path" exact element={<Component />}></Route>For Hirushan */}
        {/* <Route path="/path" exact element={<Component />}></Route>For Heshan */}
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
