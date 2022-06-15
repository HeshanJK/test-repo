import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import POS_Home from './POS_components/POS_Home';
import Landing from './Landing_component/Landing';
import './App.css'
import Admin_Home from './NewAdmin_Components/Admin_Home';
import OderTable from './Kitchen_component/OderTable';
import Inventory_MenuNew from './NewAdmin_Components/Inventory_MenuNew';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Landing />}></Route>
        
        <Route path="/POS_Home" exact element={<POS_Home />}></Route>
        <Route path="/Admin_Home" exact element={<Admin_Home/>}></Route>
        <Route path="/OderTable" exact element={<OderTable/>}></Route>

        {/* <Route path="/path" exact element={<Component />}></Route>For Hirushan */}
        {/* <Route path="/path" exact element={<Component />}></Route>For Heshan */}
       
        <Route path="/x" exact element={<Inventory_MenuNew/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
