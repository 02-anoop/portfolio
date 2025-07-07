import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Allprojects from './Allprojects';
import Contact from './Contact';
import About from './About';
import Errorpage from './Errorpage';
import Cursor from './Cursor'; // Import your custom cursor component

function App() {
  return (
    <BrowserRouter>
      <Cursor /> {/* Cursor will stay on top of all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Allprojects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
