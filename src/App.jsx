import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Allprojects from './Allprojects';
import Errorpage from './Errorpage';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Home></Home>}></Route>
          <Route path='/projects' element={<Allprojects></Allprojects>}></Route>
          <Route path='*' element={<Errorpage></Errorpage>}></Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
