import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import POS_Home from './components/POS_Home';

import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<POS_Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
