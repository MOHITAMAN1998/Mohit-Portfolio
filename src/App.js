import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen/index';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<div>404 Not Found</div>}/>
      </Routes>
    </div>
  );
}

export default App;
