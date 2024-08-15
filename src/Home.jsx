import React from 'react';
import Nav from './Nav';
import Landing from './Landing';
import Newprojects from './Newprojects';
import Allprojects from './Allprojects'; // Assuming this is for the /projects route
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Blogs from './Blogs';
import Faq from './Faq';
import Contact from './Contact';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Preloader from './Preloader';

const Home = () => {
  return (
    <>
    <Preloader/>
      <Nav />
      
      <Landing />
      
      <Newprojects />
      <About />
      <Skills />
      <Services />
      
      <Blogs />
      <Faq />
      <Contact />
      <Footer />
      <Outlet></Outlet>
    </>
  );
}

export default Home;
