import React, { useState } from 'react';
import './CSS/Allprojects.css';
import Nav from './Nav';
import ProjectData from './ProjectData';
import { NavLink } from 'react-router-dom';
import Footer from './Footer'
import Contact from './Contact'
const Allprojects = () => {
  const[item,setItem]=useState(ProjectData);
  const filterItem=(CatItem)=>{
    const updatedItems=ProjectData.filter((currElem)=>{
      return currElem.category===CatItem;
    });
    setItem(updatedItems);
   
  }
  return (
    <>
    <Nav/>

      <div className='apheading'><p>
        HII👋<br/>
        THIS IS MY W🌍RLD.<br/>
        DISCOVER MY W💣RKS AND ME👨‍💻

      </p>
     
    </div>
    <div className='protab'>
      <button className='webdp' onClick={()=>filterItem('webd')}>Web Development</button>
      <button className='uiuxp'onClick={()=>filterItem('uiux')}>UI/UX</button>
      
      <button className='othersp'onClick={()=>setItem(ProjectData)}>ALL</button>
    </div>
    <div className='allpro'>
    {
      item.map((elem)=>{
        const {id,proname,prodescription,proimg,prolink,protech}=elem;
        return(
          <div className='projectbox'>
    <div className='proimg'>
      <img src={proimg} alt={proname} className='proimg'></img>
    </div>
      <div className='projectinfo'>

        <div className='proname'>{proname}</div>
        
        <a href={prolink} className='prolink'>View Project<i className="fa-solid fa-arrow-right-long"></i></a>
      </div>
      </div>
   
        );
      })
    }
    </div>
    <Contact/>
    <Footer/>
    </>
  );
}

export default Allprojects;
